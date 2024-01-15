const puppeteer = require('puppeteer');

exports.scrapeCompetitions = async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.worldsurfleague.com/events?all=1&year=2024');

        // Wait for the required DOM to be rendered
        await page.waitForSelector('.event-schedule-list'); // Adjusted selector for the events list

        // Extract the data from the page
        const competitions = await page.evaluate(() => {
            let items = document.querySelectorAll('.event-schedule-list .event-item'); // Adjusted selector for each event
            let results = [];

            items.forEach((item) => {
                const title = item.querySelector('.event-title')?.innerText; // Adjusted selector for the title
                const date = item.querySelector('.event-date-range')?.innerText; // Adjusted selector for the date
                const location = item.querySelector('.event-location')?.innerText; // Adjusted selector for the location

                results.push({ title, date, location });
            });

            return results;
        });

        await browser.close();
        res.json(competitions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching competitions' });
    }
};

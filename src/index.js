const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    try {
        // Use fs.writeFile to update the content of the file
        await fs.writeFile(fileName, fileContent, 'utf-8');
        console.log(`File "${fileName}" has been updated successfully.`);
    } catch (error) {
        console.error(`Error updating file "${fileName}": ${error.message}`);
    }
};

module.exports = updateFile;

const path = require('path');
const fs = require('fs');

(function main() {
    const generatorsPaths = path.join(__dirname, 'src', 'generators');
    const generatorBarrel = path.join(generatorsPaths, 'index.ts');

    const generatorNameSpaces = fs.readdirSync(generatorsPaths).filter(dir => dir !== 'index.ts');

    const barrelFileImports = [];

    for (const nameSpace of generatorNameSpaces) {
        barrelFileImports.push(nameSpace);

        const dirPath = path.join(generatorsPaths, nameSpace);
        const dirBarrelFile = path.join(dirPath, 'index.ts');

        const dirBarrelFileImports = [];

        const dir = fs.readdirSync(dirPath).filter(file => file !== 'index.ts');

        for (const file of dir) {
            dirBarrelFileImports.push(
                file.split('.').at(0)
            );
        }
        const imports = dirBarrelFileImports.map(name => `import ${name} from './${name}';`).join("\n");
        const exports = `export {
            ${dirBarrelFileImports.join(",\n")}
        };`
        const final = imports + "\n\n" + exports;
        fs.writeFileSync(dirBarrelFile, final);
    }

    fs.writeFileSync(generatorBarrel, barrelFileImports.map(name => `export * as ${name} from './${name}';`).join("\n"));

})();
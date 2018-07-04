import * as fs from 'fs'
import * as path from 'path'
import * as Spritesmith from 'spritesmith'

interface Coordinates {
    x : number
    y : number
    width : number
    height : number
}

const assetFolder = `${path.resolve(__dirname, '../src/assets/')}/`

// Generate our spritesheet
const sprites = [
    'around_the_web_cut.png',
    'DefinitelyTyped.png',
    'assignar.png',
    'eslint.png',
    'HonsRecursiveSolverGE.png',
    'mysqldump.png',
    'open_source.png',
    'open_demo.png',
].map(p => path.resolve(assetFolder, p))

const social = [
    'github',
    'wakatime',
    'twitter',
    'google',
    'instagram',
    'linkedin',
    'steam',
    'youtube',
]

Spritesmith.run({
    src: sprites,
    layout: 'left-right',
}, (err, result) => {
    if (err) {
        throw err
    }

    fs.writeFileSync(path.resolve(assetFolder, 'spritesheet.png'), result.image)

    // add the coordinates for the social links
    const coordinates : (Coordinates & { name : string })[] = []
    Object.keys(result.coordinates).forEach((k) => {
        const name = k.replace(assetFolder, '').replace('.png', '')
        if (name.startsWith('around_the_web')) {
            return
        }

        coordinates.push(Object.assign({}, result.coordinates[k], {
            name,
        }))
    })
    const size = 64
    social.forEach((k, i) => {
        coordinates.push({
            name: k,
            height: size,
            width: size,
            x: i * size,
            y: 0,
        })
    })

    const lines : string[] = [
        '%sprite {',
        `    height: ${size}px;`,
        `    width: ${size}px;`,
        '    background-image: url("./assets/spritesheet.png");',
        '    background-repeat: no-repeat;',
        '    display: inline-block;',
        '}',
        '',
    ]
    coordinates.forEach((sprite) => {
        lines.push(
            `.icon-${sprite.name} {`,
            '    @extend %sprite;',
            `    background-position: ${-sprite.x}px ${-sprite.y}px;`,
            '}',
            '',
        )
    })
    fs.writeFileSync(path.resolve(__dirname, '../src/sprites.scss'), lines.join('\n'), 'utf8')
})

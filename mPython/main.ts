
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}


//% color="#AA278D" iconWidth=50 iconHeight=40
namespace motors {
    //% block="show [STR] on the [LINE] line" blockType="command"
    //% STR.shadow="string" STR.defl=hello
    //% LINE.shadow="dropdownRound" LINE.options="LINE" LINE.defl="LINE.1"
    export function println(parameter: any, block: any) {
        let str = parameter.STR.code
        let line = parameter.LINE.code
        // Generator.addInclude('oled12864', '#include <oled12864.h>');
        // Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
        // Generator.addSetup(`myoled.begin`, `myoled.begin();`);
        Generator.addCode(`myoled.setCursorLine(${line});\n\tmyoled.printLine(${str});`);
    }
}

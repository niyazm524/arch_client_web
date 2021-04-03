import * as readline from 'readline';
export { };
class OS { // singleton
    private static instance: OS;

    public Name: String;

    private constructor(name: String) {
        this.Name = name;
    }

    public static getInstance(name: String): OS {
        if (OS.instance == undefined) {
            OS.instance = new OS(name);
        }

        return OS.instance;
    }
}
// Фабрика
interface CompFactory {
    createComp();
}

class AsusFactory implements CompFactory {
    public createComp() {
        return new AsusComp();
    }
}

interface CompFunc {
    printFunc(): String;

}

class AsusComp implements CompFunc {
    public printFunc(): String {
        return "Hello World!";

    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public chooseAsus(factory: CompFactory): void {

    const product = factory.createComp();
    console.log("Create Comp!");        
    }
}

interface Strategy {
    install(name: String);
}

class chooseLinux implements Strategy {
    public install(name: String){
        let os = OS.getInstance("Linux");
        return "Install Linux";
    }
}
/**
 * Клиентский код.
 */
// function clientCode(factory: CompFactory) {
//     const product = factory.createComp();
//     console.log(product.printFunc());
//     console.log(product.installOs());
// }

// clientCode(new AsusFactory);
 const context = new Context(new chooseLinux());
 console.log("choose ok");
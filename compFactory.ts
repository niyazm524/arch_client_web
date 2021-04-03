export { };
class OS { // singleton
    private static instance: OS;

    public Name: String;

    private constructor(name: String) {
        this.Name = name;
    };

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
        return "Hello World from Asus!";

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
    public install(name: String) {
        let os = OS.getInstance("Linux");
        return "Install Linux";
    }
}

class chooseWin10 implements Strategy {
    public install(name: String) {
        let os = OS.getInstance("Win10");
        return "Install Windows 10";
    }
}

class chooseMac implements Strategy {
    public install(name: String) {
        let os = OS.getInstance("MacOS");
        return "Install MacOS";
    }
}
interface Component {
    sendMail(userMail: String): String;
}

class MailDecorator implements Component {
    public sendMail(userMail: String) {
        const nodemailer = require("nodemailer");
        async function main() {
            let acc = await nodemailer.createTestAccount();
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "my_email",
                    pass: "my_pass",
                },
            });

            let info = await transporter.sendMail({
                from: 'Computer Factory', 
                to: userMail, 
                text: "Your computer already done", 
            });

        }
        return "Email sent";
    }
}

/**
 * Клиентский код.
 */
function clientCode(factory: CompFactory) {
    const newComp = factory.createComp();
    let strategy = "Linux";
    if (strategy == "Linux"){
        const context = new Context(new chooseLinux());
    }
    if (strategy == "Mac") {
        const context = new Context(new chooseMac());
    }
    if (strategy == "Win10"){
        const context = new Context(new chooseWin10());
    }
    
    const dec = new MailDecorator;
}

clientCode(new AsusFactory);



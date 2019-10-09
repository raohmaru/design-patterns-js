const CPU = {
    freeze() {
        console.log('CPU freezing');
    },
    jump(position) {
        console.log(`CPU jump to ${position}`);
    },
    execute() {
        console.log('CPU execute');
    }
};

const HardDrive = {
    read(lba, size) {
        console.log(`HardDrive read ${lba} ${size}`);
        return '[data]';
    }
}

const Memory = {
    load(position, data) {
        console.log(`Memory load ${position} ${data}`);
    }
}

/* Facade */
const ComputerFacade = function (){
    this.processor = Object.create(CPU);
    this.ram = Object.create(Memory);
    this.hd = Object.create(HardDrive);

   this.start = function() {
        this.processor.freeze();
        this.ram.load(0, this.hd.read(0, 1024));
        this.processor.jump(10);
        this.processor.execute();
    }
}

/* Client */
computer = new ComputerFacade();
computer.start();

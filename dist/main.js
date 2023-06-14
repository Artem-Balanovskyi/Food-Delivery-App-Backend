"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process = require("process");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        await app.listen(process.env.PORT || 5000, () => console.log(`Server was started on PORT ${process.env.PORT || 5000}`));
    }
    catch (err) {
        console.log(`Bootstrap error: ${err.message}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
import { Controller, Get, Render, Param } from '@nestjs/common';
import { LivesService } from './lives.service';

@Controller('maratona')
export class LivesController {
    constructor(private readonly livesService: LivesService) {}

    @Get('')
    @Render('lives')
    async root() {
        return {
            lives: {
                today: await this.livesService.findToday(),
                allNext: await this.livesService.findAllNext(),
                allPrevious: await this.livesService.findAllPrevious(),
            }
        };
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `This action returns a #${id} cat`;
    }
}

import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { Highlight } from './property.entity';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Get()
  findAll() {
    return this.highlightsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Highlight>) {
    return this.highlightsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Highlight>) {
    return this.highlightsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.highlightsService.delete(id);
  }

  @Post('reorder')
  reorder(@Body() data: Highlight[]) {
    return this.highlightsService.reorder(data);
  }
}

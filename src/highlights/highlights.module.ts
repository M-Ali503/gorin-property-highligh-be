import { Module } from '@nestjs/common';
import { HighlightsController } from './highlight.controller';
import { HighlightsService } from './highlights.service';

@Module({
  controllers: [HighlightsController], // Register the controller
  providers: [HighlightsService], // Optional service for business logic
})
export class HighlightsModule {}

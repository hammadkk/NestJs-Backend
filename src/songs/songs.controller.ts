import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  HttpStatus,
  Param,
  ParseIntPipe,
  Body,
  Query,
  DefaultValuePipe,
  UseGuards,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Song } from './song.entity';
import { ArtistJwtGuard } from 'src/auth/artists-jwt-guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('songs')
@ApiTags('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  @UseGuards(ArtistJwtGuard)
  async create(@Body() createSongDTO: CreateSongDTO) {
    return await this.songsService.create(createSongDTO);
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Song>> {
    limit = limit > 100 ? 100 : limit;
    return this.songsService.paginate({
      page,
      limit,
    });
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetch song on the based on id ${typeof id}`;
  }

  @Put(':id')
  async update() {
    return 'update song on the based on id';
  }

  @Delete(':id')
  async delete() {
    return 'delete song on the based on id';
  }
}

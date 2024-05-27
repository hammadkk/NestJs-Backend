import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    throw new Error('Error in Db whil fetching record');
    return this.songs;
  }
}

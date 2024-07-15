import { Artist } from 'src/artist/artist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(
    () => Artist,
    (artist) => {
      artist.user;
    },
  )
  @JoinColumn()
  artist: Artist;
}

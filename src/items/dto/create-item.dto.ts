import { ListingDto } from './create-listing.dto';
import { createTagDto } from './create-tag.dto';

export class CreateItemDto {
  name: string;
  isPublic: boolean;
  listing: ListingDto;
  tags: createTagDto[];
}

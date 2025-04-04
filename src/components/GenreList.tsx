import {
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  const skeletons = [1, 2, 3, 4, 5, 6];
  // if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <Card>
              <HStack paddingX={3}>
                <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
                <CardBody>
                  <SkeletonText fontSize="lg" />
                </CardBody>
              </HStack>
            </Card>
          </ListItem>
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={'auto'}>
      {images.map((img) => (
        <ImageListItem key={img}>
          <img
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

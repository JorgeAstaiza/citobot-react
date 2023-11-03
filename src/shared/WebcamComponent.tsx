import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import FileUpload from "./FileUpload";

import { BsFileEarmarkArrowUp } from "react-icons/bs";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function WebcamComponent() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const [selectedCard, setSetselectedCard] = useState<number | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc([...imgSrc, imageSrc]);
  }, [webcamRef, setImgSrc, imgSrc]);

  const imageSelected = (i: number) => {
    setSetselectedCard(i);
  };

  const showImageToSelect = (images: string[]) => {
    return images.map((img: string, index) => (
      <Card
        maxW="sm"
        key={index}
        shadow="dark-lg"
        bg={selectedCard === index ? "rgba(74, 74, 74, 0.42);" : "white"}
      >
        <CardBody>
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
        <Divider />
        <CardFooter p={3}>
          <Button
            onClick={() => imageSelected(index)}
            variant="solid"
            colorScheme="blue"
          >
            Seleccionar
          </Button>
        </CardFooter>
      </Card>
    ));
  };

  const handleFileChange = (e: string) => {
    if (e) {
      setImgSrc([...imgSrc, e]);
    }
  };
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={700}
        videoConstraints={videoConstraints}
      />
      <Stack direction="row" spacing={4} align="center">
        <Button onClick={capture} colorScheme="blue" variant="solid">
          Tomar Foto
        </Button>
        <Button colorScheme="blue" variant="solid">
          Cambiar Camara
        </Button>

        <FileUpload multiple onFileChange={handleFileChange}>
          <Button leftIcon={<BsFileEarmarkArrowUp />}>Upload</Button>
        </FileUpload>
      </Stack>
      <Box display="flex" flexDirection="row" gap={4} mb={5}>
        {imgSrc && showImageToSelect(imgSrc)}
      </Box>
    </>
  );
}

export default WebcamComponent;

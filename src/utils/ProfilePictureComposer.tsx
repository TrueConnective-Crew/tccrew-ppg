import { useRef } from "react";
import badge from "@/assets/badge.png";
import { Button, Flex } from "@chakra-ui/react";

interface Props {
  avatarUrl: string; // z. B. von der API
}

function AvatarComposer({ avatarUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // wichtig bei API-Bildern!
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = src;
    });
  };

  const downloadImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const avatarImg = await loadImage(avatarUrl);
    const overlayImg = await loadImage(badge);

    // Einheitliche Canvas-Größe setzen (z. B. 512x512 oder passend zum Avatar)
    const size = Math.max(avatarImg.width, avatarImg.height, 512);
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Avatar zentrieren & skalieren
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(avatarImg, 0, 0, size, size);
    ctx.drawImage(overlayImg, 0, 0, size, size); // passt sich an

    // Download
    const link = document.createElement("a");
    link.download = "pb_tc-crew.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <Flex direction="column" align="center" justify="center" m={8} gap={4}>
      <canvas ref={canvasRef} style={{ width: "256px", height: "256px" }} />
      <Button
        onClick={downloadImage}
        variant="surface"
        colorPalette="teal"
        width={"sm"}
      >
        Profilbild erstellen und herunterladen!
      </Button>
    </Flex>
  );
}

export default AvatarComposer;

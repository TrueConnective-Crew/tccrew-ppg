import type { TikTokUserResponse } from "@/utils/TikTokUserResponse.ts";
import { Button, Card, Flex, Heading, Input } from "@chakra-ui/react";
import AvatarComposer from "@/utils/ProfilePictureComposer.tsx";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";
import axios from "axios";

async function getProfilePicture(username: string) {
  const options = {
    method: "GET",
    url: "https://tiktok-api23.p.rapidapi.com/api/user/info",
    params: {
      uniqueId: username,
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": "tiktok-api23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const result: TikTokUserResponse = response.data;
    console.log(result.userInfo.user.avatarLarger);
    return result.userInfo.user.avatarLarger;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showComposer, setShowComposer] = useState(false);

  const handleGetProfilePicture = async () => {
    if (!username) {
      toaster.create({
        title: "Bitte geben Sie einen Benutzernamen ein",
        type: "warning",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    setShowComposer(false); // Reset des Composers bei neuer Anfrage
    try {
      const url = await getProfilePicture(username);
      if (url) {
        setAvatarUrl(url);
        setShowComposer(true); // Zeige Composer erst nach erfolgreicher Anfrage
        toaster.create({
          title: "Profilbild erfolgreich geladen",
          type: "success",
          duration: 3000,
        });
      } else {
        toaster.create({
          title: "Kein Profilbild gefunden",
          type: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Fehler:", error);
      toaster.create({
        title: "Fehler beim Laden des Profilbilds",
        description:
          error instanceof Error ? error.message : "Unbekannter Fehler",
        type: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" m={8}>
      <Card.Root width="md">
        <Card.Header>
          <Heading size="3xl" m={4} textAlign="center">
            TC Profilbild Generator
          </Heading>
        </Card.Header>
        <Card.Body gap={6}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            m={4}
            gap={4}
          >
            <Input
              variant="outline"
              textAlign="center"
              placeholder="TikTok Anmeldename"
              value={username}
              width={"sm"}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              variant="surface"
              colorPalette="teal"
              onClick={handleGetProfilePicture}
              loading={isLoading}
              loadingText="Lade Profilbild..."
              width={"sm"}
            >
              Profilbild laden!
            </Button>
            {showComposer && avatarUrl && (
              <AvatarComposer avatarUrl={avatarUrl} />
            )}
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}

export default App;

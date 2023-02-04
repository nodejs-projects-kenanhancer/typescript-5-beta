interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface File {
  content: { lines: string }[];
}

type FileReader = File & ErrorHandling;

function writeToFile(response: FileReader) {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.content);
}

export {};

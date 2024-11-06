'use client'

import { Button } from "./ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/docs/${docId}`);
    })
  };
  return <Button onClick={handleCreateNewDocument} disabled={!isPending}>
    {isPending ? "Creating..." : "New Document"}
  </Button>;
}

export default NewDocumentButton;
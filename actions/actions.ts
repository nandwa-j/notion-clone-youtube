"use server"

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";

export async function createNewDocument() {
    auth().protect();

    const {sessionClaims} = await auth();

    const docCollectionRef = adminDb.collection("documents");
    const docref = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!)
}
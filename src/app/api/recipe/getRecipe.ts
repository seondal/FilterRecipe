import { db } from "@/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  or,
  query,
  QueryCompositeFilterConstraint,
  where,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function getRecipe(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");
  const keyword = searchParams.get("keyword");
  const userid = searchParams.get("userid");

  const ref = collection(db, "recipe");

  let q = query(ref);

  if (userid) {
    q = query(ref, where("userId", "==", userid));
  }

  if (category) {
    const categoryArray = category.split(",");
    q = query(
      ref,
      or(
        where("category.main", "in", categoryArray),
        where("category.sub", "in", categoryArray)
      )
    );
  }

  const snapshot = await getDocs(q);

  if (keyword) {
    const filteredDocs: DocumentData[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (
        data.title.includes(keyword) ||
        (data.description && data.description.includes(keyword))
      ) {
        filteredDocs.push(data);
      }
    });
    return NextResponse.json(filteredDocs);
  }

  const results = snapshot.docs.map((doc) => doc.data());
  return NextResponse.json(results);
}

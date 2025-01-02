import { useQuery } from "@apollo/client";

import DefaultLayout from "@/layouts/default";

import { GetProtectedDocument } from "../graphql/dist/client";
import { GetProtectedQuery } from "../graphql/dist/client";
import { Navbar } from "@/components/navbar";

export default function IndexPage() {
  const { data, error } = useQuery<GetProtectedQuery>(GetProtectedDocument);
  console.log("data: ", data);
  console.log("error: ", error);
  return (
    <DefaultLayout>
      The website is currently under construction.
    </DefaultLayout>
  );
}

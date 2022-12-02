import React from "react";
import logo from "./assets/hausBlock.svg";

import { FormProvider, useForm } from "react-hook-form";

import { DataMd, H2, Link, SingleColumnLayout } from "@daohaus/ui";

import { DHLayout } from "@daohaus/connect";

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <DHLayout
        pathname={"/"}
        navLinks={[
          { label: "Home", href: `/` },
          { label: "Example Form", href: "/form" },
        ]}
      >
        <SingleColumnLayout>
          <H2>DAOhaus is your haus.</H2>

          <img src={logo} alt="DAOhaus blocks" />

          <DataMd>Get started by editing: src/App.tsx</DataMd>

          <Link type="external" href="https://toolbox.daohaus.fun/">
            Documentation
          </Link>
          <Link type="external" href="https://admin.daohaus.club/">
            Admin
          </Link>
          <Link type="external" href="https://admin.daohaus.club/">
            Example Form
          </Link>
        </SingleColumnLayout>
      </DHLayout>
    </FormProvider>
  );
}

export default App;

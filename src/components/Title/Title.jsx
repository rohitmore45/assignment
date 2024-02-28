import React from "react";
import styles from "./Title.module.css";
import Detail from "./Details/Detail";
import Links from "./Links/Links";
import BreadCrumb from "./Details/BreadCrumb/BreadCrumb";
import Card from "../MainCard/Card";
import data from "../MainCard/CardData.json";

export default function Title() {
  return (
    <main className={`container`}>
      <div className={`${styles.title}`}>Best Website builders in the US</div>
      <Detail />
      <div className={`${styles.btnLinks}`}>
        <Links linkName="Tools" />
        <Links linkName="AWS Builder" />
        <Links linkName="Start Build" />
        <Links linkName="Build Supplies" />
        <Links linkName="Tooling" />
        <Links linkName="BlueHosting" />
      </div>
      <div className={`${styles.breadCrumb}`}>
        <BreadCrumb name="Home" />
        <BreadCrumb name="Hosting for all" />
        <BreadCrumb name="Hosting" />
        <BreadCrumb name="Hosting 6" />
        <BreadCrumb name="Hosting 5" />
      </div>
      {data.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </main>
  );
}

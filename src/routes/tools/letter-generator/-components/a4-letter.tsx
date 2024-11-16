import { Document, Font, Image, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";

import { committeeMembers } from "@/data/committe";
import replaceWithNepaliNumbers from "@/helpers/replace-with-nepali-numbers";

import type { LetterContent } from "./letter-context";

import { useLetterContext } from "./letter-context";

Font.register({
  family: "Lora",
  src: "/assets/fonts/Lora-Regular.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  family: "Lora",
  src: "/assets/fonts/Lora-Bold.ttf",
  fontStyle: "normal",
  fontWeight: "bold",
});

Font.register({
  family: "Lora",
  src: "/assets/fonts/Lora-Medium.ttf",
  fontStyle: "normal",
  fontWeight: "medium",
});

Font.register({
  family: "Lora",
  src: "/assets/fonts/Lora-SemiBold.ttf",
  fontStyle: "normal",
  fontWeight: "semibold",
});

Font.register({
  family: "NotoSerifDevanagari",
  src: "/assets/fonts/NotoSerifDevanagari-Regular.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  family: "NotoSerifDevanagari",
  src: "/assets/fonts/NotoSerifDevanagari-Bold.ttf",
  fontStyle: "normal",
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Lora",
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottom: "2px solid #333",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sidebar: {
    width: 160,
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRight: "2px solid #333",
    fontSize: "12px",
  },
  mainContent: {
    padding: 20,
    fontFamily: "NotoSerifDevanagari",
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
  },
  footer: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#87CEEB",
    fontSize: 10,
  },
  textRight: {
    textAlign: "right",
    width: "70%",
  },
  textCenter: {
    textAlign: "center",
  },
  logo: { height: 50, width: 50, objectFit: "contain", objectPosition: "center" },
  headerTextContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },

});

const ReplaceEnglishLetter = ({
  children,
  fontSize = 14,
}: {
  children?: string;
  fontSize?: number;
}) => {
  if (!children)
    return null;

  // Split by words and preserve whitespace/newlines
  const segments = children.split(/(\s+)/);

  return (
    <Text>
      {segments.map((segment, index) => {
        // Regex to check if the segment is a "word-like" structure
        const regex = /^[\w!@#$%^&*()+\-=[\]{};':"\\|,.<>/?]+$/;

        if (regex.test(segment)) {
          // Render words with the specified font size
          return (
            <Text key={index} style={{ fontSize, fontFamily: "Lora" }}>
              {segment}
            </Text>
          );
        }
        else {
          // Render non-word segments (spaces, newlines) as is
          return <Text key={index}>{segment}</Text>;
        }
      })}
    </Text>
  );
};

export const PDF = ({
  letterContent,
}: {
  letterContent: LetterContent;
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src={letterContent.logos?.leftLogo} style={styles.logo} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>{letterContent.headers?.heading}</Text>
            <Text style={styles.textCenter}>{letterContent.headers?.subHeading}</Text>
            <Text style={styles.textCenter}>
              ESTD:
              {" "}
              {letterContent.headers?.estd}
            </Text>
          </View>
          <Image src={letterContent.logos?.rightLogo} style={styles.logo} />
        </View>

        <View style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
          {/* Sidebar */}
          <View style={styles.sidebar}>
            <Text style={{
              fontWeight: "medium",
            }}
            >
              Ref No.:
              {" "}
              {letterContent.refNo ?? "..."}
            </Text>
            {committeeMembers.map((role, index) => (
              <View key={index} style={{ marginTop: 10 }}>
                <Text style={
                  {
                    fontWeight: "semibold",
                    fontSize: 12,
                  }
                }
                >
                  {role.title}
                </Text>
                <Text style={{
                  fontSize: 10,
                }}
                >
                  {role.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <Text style={styles.textRight}>
              मिति:
              {" "}
              <ReplaceEnglishLetter>
                {replaceWithNepaliNumbers(letterContent.content?.date ?? "")}
              </ReplaceEnglishLetter>
            </Text>

            <Text>
              <ReplaceEnglishLetter>
                {letterContent.content?.recipientsInfo}
              </ReplaceEnglishLetter>
            </Text>
            <View style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <Text style={[styles.textCenter, { marginTop: 20, fontWeight: "bold", textAlign: "center" }]}>
                विषय:
                {" "}
                <ReplaceEnglishLetter>
                  {letterContent.content?.subject}
                </ReplaceEnglishLetter>
              </Text>
            </View>

            <Text style={{ marginTop: 20, textAlign: "justify", flexGrow: 1 }}>
              <ReplaceEnglishLetter>
                {letterContent.content?.greetings}
              </ReplaceEnglishLetter>
              {"\n"}
              <ReplaceEnglishLetter>
                {letterContent.content?.body}
              </ReplaceEnglishLetter>
            </Text>

            {/* Signature */}
            <View style={[{ marginTop: 40, position: "relative", fontSize: 14, width: "65%", textAlign: "right" }]}>
              {letterContent.signatureBlock?.signatureUrl && (
                <Image
                  src={letterContent.signatureBlock?.signatureUrl}
                  style={{ height: 50, width: "auto", marginBottom: 10, marginLeft: "auto", position: "relative", top: "10px", left: "300px" }}
                />
              )}
              <Text>
                <ReplaceEnglishLetter fontSize={12}>
                  {letterContent.signatureBlock?.salutation}
                </ReplaceEnglishLetter>
              </Text>
              <Text>
                <ReplaceEnglishLetter fontSize={12}>
                  {letterContent.signatureBlock?.name}
                </ReplaceEnglishLetter>
              </Text>
              <Text>
                <ReplaceEnglishLetter fontSize={12}>
                  {letterContent.signatureBlock?.position}
                </ReplaceEnglishLetter>
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            E-MAIL:
            {" "}
            <Link src={`mailto:${letterContent.email}`} style={{ textDecoration: "underline" }}>
              {letterContent.email}
            </Link>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const A4LetterPDF = () => {
  const { letterContent } = useLetterContext();

  return (
    <>
      <PDFViewer className="w-full h-full">
        <PDF letterContent={letterContent} />
      </PDFViewer>
    </>
  );
};

export default A4LetterPDF;

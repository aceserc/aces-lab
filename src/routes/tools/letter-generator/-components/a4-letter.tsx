import { Document, Font, Image, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";

import { committeeMembers } from "@/data/committe";

import { useLetterContext } from "./letter-context";

Font.register({
  family: "BricolageGrotesque",
  src: "/assets/fonts/BricolageGrotesque-Regular.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});

Font.register({
  family: "BricolageGrotesque",
  src: "/assets/fonts/BricolageGrotesque-Bold.ttf",
  fontStyle: "normal",
  fontWeight: "bold",
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
    fontFamily: "BricolageGrotesque",
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
  },
  footer: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#87CEEB",
    fontSize: 10,
  },
  textRight: {
    textAlign: "right",
    width: "60%",
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

const A4LetterPDF = () => {
  const { letterContent } = useLetterContext();

  return (
    <>
      <PDFViewer className="w-full h-[80vh]">
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
                <Text>
                  Ref No.:
                  {" "}
                  {letterContent.refNo ?? "..."}
                </Text>
                {committeeMembers.map((role, index) => (
                  <View key={index} style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{role.title}</Text>
                    <Text>{role.name}</Text>
                  </View>
                ))}
              </View>

              {/* Main Content */}
              <View style={styles.mainContent}>
                <Text style={styles.textRight}>
                  मिति:
                  {" "}
                  {/* {new NepaliDate(
                letterContent?.content?.date ?? new Date().toString(),
              ).format("YYYY-MM-DD")} */}
                </Text>

                <Text>{letterContent.content?.recipientsInfo}</Text>
                <View style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                  <Text style={[styles.textCenter, { marginTop: 20, fontWeight: "bold", textAlign: "center" }]}>
                    विषय:
                    {" "}
                    {letterContent.content?.subject}
                  </Text>
                </View>

                <Text style={{ marginTop: 20, textAlign: "justify", flexGrow: 1 }}>
                  {letterContent.content?.greetings}
                  {"\n"}
                  {letterContent.content?.body}
                </Text>

                {/* Signature */}
                <View style={[styles.textRight, { marginTop: 40 }]}>
                  <Text>भवदीय,</Text>
                  {letterContent.signatureBlock?.signatureUrl && (
                    <Image
                      src={letterContent.signatureBlock?.signatureUrl}
                      style={{ height: 50, width: "auto", marginBottom: 10 }}
                    />
                  )}
                  <Text>{letterContent.signatureBlock?.name}</Text>
                  <Text>{letterContent.signatureBlock?.position}</Text>
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
      </PDFViewer>
    </>
  );
};

export default A4LetterPDF;

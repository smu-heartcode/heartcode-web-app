import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

interface MyDocumentProps extends DocumentInitialProps {
  nonce?: string;
}

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonceHeader = ctx.req?.headers["x-nonce"];
    const nonce = Array.isArray(nonceHeader) ? nonceHeader[0] : nonceHeader;

    return { ...initialProps, nonce };
  }

  render() {
    const { nonce } = this.props as MyDocumentProps;

    return (
      <Html>
        <Head nonce={nonce}>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

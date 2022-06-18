import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
        {/* <title>Super Admin</title> */}
        <link
          rel="stylesheet"
          href="vendors/mdi/css/materialdesignicons.min.css"
        />
        <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css" />
        <link
          rel="stylesheet"
          href="vendors/datatables.net-bs4/dataTables.bootstrap4.css"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" href="images/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          src="https://code.jquery.com/jquery-3.6.0.js"
          integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"
          integrity="sha512-aUhL2xOCrpLEuGD5f6tgHbLYEXRpYZ8G5yD+WlFrXrPy2IrWBlu6bih5C9H6qGsgqnU6mgx6KtU8TreHpASprw=="
          crossorigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <script src="js/template.js"></script>
        <script src="vendors/base/vendor.bundle.base.js"></script>
        <script src="vendors/chart.js/Chart.min.js"></script>
        <script src="vendors/datatables.net/jquery.dataTables.js"></script>
        <script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
        <script src="js/off-canvas.js"></script>
        <script src="js/hoverable-collapse.js"></script>

        <script src="js/dashboard.js"></script>
        <script src="js/data-table.js"></script>
        <script src="js/jquery.dataTables.js"></script>
        <script src="js/dataTables.bootstrap4.js"></script>

        <script src="js/jquery.cookie.js" type="text/javascript"></script>
      </body>
    </Html>
  );
}

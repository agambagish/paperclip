export const VERIFY_ACCOUNT_EMAIL = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Account</title>
    <style>
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #0a0a0a !important;
          color: #fafafa !important;
        }

        .card {
          background-color: #171717 !important;
          color: #fafafa !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }

        .muted {
          color: #a1a1aa !important;
        }

        .divider {
          border-top-color: rgba(255, 255, 255, 0.1) !important;
        }

        .link {
          color: #5ea500 !important;
        }

        .brand {
          color: #fafafa !important;
        }
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Inter, Helvetica, Arial, sans-serif;
      color: #111827;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="padding: 40px 16px"
    >
      <tr>
        <td align="center">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            class="card"
            style="
              max-width: 420px;
              background-color: #ffffff;
              color: #111827;
              border: 1px solid #e5e7eb;
              border-radius: 0;
              padding: 32px;
            "
          >
            <tr>
              <td style="padding-bottom: 24px;">
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td
                      style="
                        vertical-align: middle;
                        padding-right: 10px;
                        line-height: 0;
                      "
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style="display: block;"
                      >
                        <path
                          d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 115.66 5.66l-9.2 9.19a2 2 0 11-2.83-2.83l8.48-8.48"
                          stroke="#5ea500"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                    <td
                      class="brand"
                      style="
                        vertical-align: middle;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 20px;
                        letter-spacing: -0.01em;
                      "
                    >
                      Paperclip
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style="
                  font-size: 20px;
                  font-weight: 600;
                  padding-bottom: 12px;
                "
              >
                Verify Your Account
              </td>
            </tr>
            <tr>
              <td
                style="
                  font-size: 14px;
                  line-height: 1.6;
                  color: #374151;
                  padding-bottom: 24px;
                "
                class="muted"
              >
                Thanks for signing up. To complete your registration, please
                verify your email address by clicking the button below.
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom: 24px">
                <a
                  href="{{VERIFY_URL}}"
                  style="
                    display: inline-block;
                    background-color: #5ea500;
                    color: #f0fdf4;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 12px 20px;
                    border-radius: 0;
                  "
                >
                  Verify Account
                </a>
              </td>
            </tr>
            <tr>
              <td
                style="
                  font-size: 12px;
                  line-height: 1.6;
                  color: #6b7280;
                  padding-bottom: 16px;
                "
                class="muted"
              >
                If the button doesn't work, copy and paste this link into your
                browser:
                <br />
                <a
                  href="{{VERIFY_URL}}"
                  class="link"
                  style="
                    color: #5ea500;
                    word-break: break-all;
                  "
                >
                  {{VERIFY_URL}}
                </a>
              </td>
            </tr>
            <tr>
              <td
                class="divider"
                style="
                  font-size: 12px;
                  color: #9ca3af;
                  border-top: 1px solid #e5e7eb;
                  padding-top: 16px;
                "
              >
                If you did not create an account, you can safely ignore this
                email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

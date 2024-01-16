import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import PhotoInformation from "@/components/photoPage/PhotoInformation";

const testPhoto = {
  id: 1,
  albumId: 2,
  title: "Test Title",
  url: "test-url",
  thumbnailUrl: "test-thumbnail-url",
};

describe("PhotoInformation", () => {
  it("renders content", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const locale = "en";
    const messages = require(`../messages/${locale}.json`);

    useRouter.mockImplementationOnce(() => ({
      query: { locale: locale },
    }));

    render(
      <NextIntlClientProvider messages={messages} locale={locale}>
        <PhotoInformation photo={testPhoto} />
      </NextIntlClientProvider>,
    );

    const title = screen.getByText(`Title: ${testPhoto.title}`);
    const id = screen.getByText(`ID: ${testPhoto.id}`);
    const albumId = screen.getByText(`Album ID: ${testPhoto.albumId}`);
    const url = screen.getByText(
      (content, element) =>
        content.startsWith("URL:") &&
        element?.children?.[0]?.textContent === testPhoto.url,
    );
    const thumbnailUrl = screen.getByText(
      (content, element) =>
        content.startsWith("Thumbnail URL:") &&
        element?.children?.[0]?.textContent === testPhoto.thumbnailUrl,
    );

    expect(title).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(albumId).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(thumbnailUrl).toBeInTheDocument();
  });
});

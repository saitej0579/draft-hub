import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import {bioWithRanks, scoutRankKeys} from "../helpers/helper_funcs";

console.log("these are the bioWithRanks", bioWithRanks);

const Board = () => {
  const top20 = 20;
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="right">ESPN Rank</TableCell>
          <TableCell align="right">Sam Vecenie Rank</TableCell>
          <TableCell align="right">Kevin O'Connor Rank</TableCell>
          <TableCell align="right">Kyle Boone Rank</TableCell>
          <TableCell align="right">Gary Parrish Rank</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {bioWithRanks.map((player) => (
            <TableRow
              key={player.playerId}
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{padding: 0, alignSelf: "center"}}
                    alt={player.name}
                    src={player.photoUrl}
                  />
                  {player.name}
                </Box>
              </TableCell>
              <TableCell align="center">
                {player["ESPN Rank"]}
                <br />
                {typeof player["ESPN Rank"] === "number" &&
                player["ESPN Rank"] <= top20 ? (
                  <span>Top 20</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">
                {player["Sam Vecenie Rank"]}
                <br />
                {typeof player["Sam Vecenie Rank"] === "number" &&
                player["Sam Vecenie Rank"] <= top20 ? (
                  <span>Top 20</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">
                {player["Kevin O'Connor Rank"]}
                <br />
                {typeof player["Kevin O'Connor Rank"] === "number" &&
                player["Kevin O'Connor Rank"] <= top20 ? (
                  <span>Top 20</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">
                {player["Kyle Boone Rank"]}
                <br />
                {typeof player["Kyle Boone Rank"] === "number" &&
                player["Kyle Boone Rank"] <= top20 ? (
                  <span>Top 20</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">
                {player["Gary Parrish Rank"]}
                <br />
                {typeof player["Gary Parrish Rank"] === "number" &&
                player["Gary Parrish Rank"] <= top20 ? (
                  <span>Top 20</span>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Board;

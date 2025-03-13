import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import ThunderstormSharpIcon from "@mui/icons-material/ThunderstormSharp";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: " center",
        margin: "25px",
        borderColor: "red",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 50 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Info{" "}
            {info.humidity > 50 ? (
              <ThunderstormSharpIcon />
            ) : info.temp > 15 ? (
              <WbSunnySharpIcon />
            ) : (
              <AcUnitSharpIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div> City ={info.city}</div>
            <div>Temparature = {(info.temp - 273.15).toFixed(1)}&deg;</div>
            <div>Feel Like ={(info.feels_like - 273.15).toFixed(1)}&deg;</div>
            <div>Ground Level = {info.grnd_level}hPa</div>
            <div>Humidity = {info.humidity}%</div>
            <div>Presssure ={info.pressure}hPa</div>
            <div>Sea Level={info.sea_level}hPa</div>
            <div>
              Maximum Temparature = {(info.temp_max - 273.15).toFixed(1)}&deg;
            </div>
            <div>
              Minimum Temparature = {(info.temp_min - 273.15).toFixed(1)}&deg;
            </div>
            <div>The Weather feels like {info.description}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

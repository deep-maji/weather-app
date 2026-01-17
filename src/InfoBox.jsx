import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

export default function InfoBox({ info }) {

  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1509635022432-0220ac12960b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW5ueSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
  const COLD_URL =
    "https://images.unsplash.com/photo-1603726574752-a85dc808deab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";

  return (
    <div className="infobox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 18
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 18 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>Min Temperature : {info.temp_min}&deg;C</p>
              <p>Max Temperature : {info.temp_max}&deg;C</p>
              <p>Wind Pressure : {info.pressure}</p>
              <p>
                The weather can be describe as <i>{info.description}</i> and
                feels like <i>{info.feels_like}&deg;C</i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

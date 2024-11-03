import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  CardMedia,
  Box,
  TextField,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildIcon from "@mui/icons-material/Build";
import SearchIcon from "@mui/icons-material/Search";
import Fingerprint from "../../assets/img/Fingerprint.svg";
import StatusBadge from "../common/StatusBadge";

export const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#F9FAFB", padding: 6 }}>
      {/* Header */}
      <Box
        sx={{ backgroundColor: "primary.darkest", color: "white", borderRadius: 2, p: 2, mb: 3 }}
      >
        <Typography variant="h1">Welcome back, Kevin</Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Left side: Release Notes */}
        <Grid item xs={12} sm={8}>
          <Box sx={{ backgroundColor: "white", borderRadius: 2, padding: 4, height: "100%" }}>
            <Card sx={{ boxShadow: 1, borderRadius: 2, mb: 2 }}>
              <CardHeader
                title={
                  <Typography variant="h3" color="text.primary">
                    Release Notes
                  </Typography>
                }
                action={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarTodayIcon />
                    <Typography variant="body2" color="grey.main" sx={{ ml: 1, fontWeight: 500 }}>
                      05/07/22 - 12/07/22
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder="Search"
                  sx={{ backgroundColor: "grey.lightest", color: "grey.light" }}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ color: "grey.light" }} />,
                  }}
                />
              </CardContent>
            </Card>
            <div style={{ maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              {[1, 2, 3, 4].map(item => (
                <Card key={item} sx={{ boxShadow: 1, borderRadius: 2, mb: 3 }}>
                  <CardHeader
                    title={
                      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                        Improved Match Rates
                      </Typography>
                    }
                    subheader={
                      <Typography variant="subtitle1" color="grey.main">
                        KYC Services • Effective July 1st 2024
                      </Typography>
                    }
                  />
                  <CardContent sx={{ pt: 0, "&:last-child": { pb: 4 } }}>
                    {" "}
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      sx={{ lineHeight: "130%" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Box sx={{ pt: 4, display: "flex", justifyContent: "space-between" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: "grey.lightest",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 32,
                            height: 32,
                            mr: 2,
                          }}
                        >
                          <BuildIcon sx={{ color: "grey.main" }} />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="grey.main"
                          sx={{ mr: 3, fontWeight: 500 }}
                        >
                          Improvement
                        </Typography>

                        <StatusBadge text="AVAILABLE NOW" />
                        {/* <StatusBadge
                          text="NOT AVAILABLE"
                          backgroundColor="pink"
                          textColor="white"
                        /> */}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Box>
        </Grid>

        {/* Right side: Latest News */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "white", borderRadius: 2, padding: 4, height: "100%" }}>
            <Card sx={{ boxShadow: 1, borderRadius: 2, mb: 2 }}>
              <CardHeader
                title={
                  <Typography variant="h3" color="text.primary">
                    Latest from Data Zoo
                  </Typography>
                }
              />
            </Card>
            <div style={{ maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              {[1, 2, 3].map(item => (
                <Card key={item} sx={{ boxShadow: 1, borderRadius: 2, mb: 2 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={Fingerprint}
                    alt="Paella dish"
                    loading="lazy"
                  />
                  <CardHeader
                    subheader={
                      <Typography variant="subtitle2" color="success.main">
                        September 14, 2016
                      </Typography>
                    }
                  />
                  <CardHeader
                    title={
                      <Typography variant="h3" color="text.primary" sx={{ fontWeight: 400 }}>
                        Shrimp and Chorizo Paella
                      </Typography>
                    }
                    sx={{
                      padding: "0 16px 0 16px",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga totam omnis,
                      perspiciatis quod consectetur minus eum consequatur libero animi autem
                      blanditiis, facere expedita suscipit! Hic ipsa porro possimus sed facilis.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                      <Chip
                        sx={{
                          borderColor: "grey.lightest",
                          color: "text.secondary",
                          boxShadow: 1,
                          borderRadius: 1,
                          mr: 1,
                        }}
                        label={
                          <Typography variant="button" color="text.secondary">
                            COMPLIANCE
                          </Typography>
                        }
                      />
                      <Chip
                        sx={{
                          borderColor: "grey.lightest",
                          color: "text.secondary",
                          boxShadow: 1,
                          borderRadius: 1,
                        }}
                        label={
                          <Typography variant="button" color="text.secondary">
                            BREAKING NEWS
                          </Typography>
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

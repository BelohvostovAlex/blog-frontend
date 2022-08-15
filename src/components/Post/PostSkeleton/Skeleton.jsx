import React from "react";
import { Stack, Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import { styles } from "./styles";

export const PostSkeleton = () => {
  return (
    <Box sx={styles.skeleton}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width="100%" height={300} />
        <Box sx={styles.skeletonContent}>
          <Box sx={styles.skeletonUser}>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            <Box sx={styles.skeletonUserDetails}>
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={100} height={15} />
            </Box>
          </Box>
          <Box className={styles.skeletonInfo}>
            <Skeleton variant="text" width="80%" height={45} />
            <Box sx={styles.skeletonTags}>
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

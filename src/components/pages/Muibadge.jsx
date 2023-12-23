import { Badge,Stack,Icon} from "@mui/material"

export const Muibadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color="error">
              <Icon/>
        </Badge>
        <Badge badgeContent={5} color="error">
              <Icon/>
        </Badge>
        <Badge badgeContent={5} color="error">
              <Icon/>
        </Badge>
    </Stack>
  )
}

export default Muibadge;

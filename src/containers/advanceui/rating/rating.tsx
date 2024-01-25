import { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { styled } from "@mui/material/styles";
import { Box, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import Pageheader from '../../../components/common/pageheader/pageheader';

function Ratings() {
  const StyledRating = styled(Rating)({ color: "#F1C40F" });
  const StyledStarRating = styled(Rating)({ color: "#E74C3C" });
  const StyledheartRating = styled(Rating)({ color: "#E74C3C" });

  let [EXECUTECALLBACKWHENRATING, setEXECUTECALLBACKWHENRATING] = useState(3)
  let [readOnlyMode, setreadOnlyMode] = useState(3)
  let [gradientsRating, setgradientsRating] = useState(3)
  let [RoundedStarRating, setRoundedStarRating] = useState(3)
  let [BasicStarRating, setBasicStarRating] = useState(3)
  let [ThumbsUpRating, setThumbsUpRating] = useState(3)
  let [MultiHeartRating, setMultiHeartRating] = useState(3)
  let [MultiStarRating, setMultiStarRating] = useState(3)
  let [HeartRating, setHeartRating] = useState(3)
  let [StarRating, setStarRating] = useState(3)
  const onChange = (value: any) => {
    setEXECUTECALLBACKWHENRATING(parseInt(value.target.value))
  };
  return (

    <Fragment>
      <Pageheader titles={'RATINGS'} active={'Rating'} Subtite={'Advanced UI'} />

      <Row className="row-cards">
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Star Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block" id="rating-1" data-stars="2">
                <div className="rating-stars block">
                  <Box sx={{ "& > legend": { mt: 2 }, }}>
                    <Rating 
                    name="no-value"
                     size="large" 
                     value={StarRating}
                     onChange={(e:any)=>{setStarRating(parseInt(e.target.value))}}
                     max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Heart Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block" id="rating-2" data-stars="2">
                <div className="rating-stars block">
                  <Box sx={{
                    "& > legend": { mt: 2 },
                  }}
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={HeartRating}
                      onChange={(e:any)=>{setHeartRating(parseInt(e.target.value))}}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Multi Star Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block" id="rating-3" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledStarRating
                    name="no-value" 
                    size="large" 
                    value={MultiStarRating} 
                    onChange={(e:any)=>{setMultiStarRating(parseInt(e.target.value))}}
                    max={10} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Multi Heart Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block" id="rating-6" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledheartRating
                      name="no-value"
                      size="large"
                      value={MultiHeartRating}
                      onChange={(e:any)=>{setMultiHeartRating(parseInt(e.target.value))}}
                      max={10}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Thumbs-up Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block" id="rating-5" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="no-value"
                      size="large"
                      value={ThumbsUpRating}
                      onChange={(e:any)=>{setThumbsUpRating(parseInt(e.target.value))}}
                      max={5}
                      icon={<ThumbUpIcon fontSize="inherit" />}
                      emptyIcon={<ThumbUpIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Basic Star Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating">
                <Stack spacing={1} className="rating-stars block my-rating ratingcenter">
                  <Rating
                    name="half-rating"
                    value={BasicStarRating}
                    onChange={(e:any)=>{setBasicStarRating(parseInt(e.target.value))}}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Rounded star Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating-4" data-stars="2">
                <Stack spacing={1} className="rating-stars  block my-rating-4 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={RoundedStarRating}
                    onChange={(e:any)=>{setRoundedStarRating(parseInt(e.target.value))}}
                    precision={0.5}
                    size="large"
                    icon={<StarsIcon fontSize="inherit" />}
                    emptyIcon={<StarsIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>gradients Rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating-5" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-5 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={gradientsRating}
                    onChange={(e:any)=>{setgradientsRating(parseInt(e.target.value))}}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Execute callback when rating</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating-6" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-6 ratingcenter">
                  <Rating
                    name="half-rating"
                    value={EXECUTECALLBACKWHENRATING}
                    precision={0.5}
                    size="large"
                    onChange={onChange}
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>read only mode</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating-7" data-stars="2">
                <Stack spacing={1} className="rating-stars block my-rating-7 ratingcenter">
                  <Rating name="half-rating-read"
                   value={readOnlyMode} max={5}
                   onChange={(e:any)=>{setreadOnlyMode(e.target.value)}}
                   size="large" readOnly />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='card-header'>
              <div className='tx-14 card-title'>Use fullstars</div>
            </div>
            <Card.Body className='overflow-auto'>
              <div className="rating-stars block my-rating-8" data-stars="2">
                <div className="rating-stars block">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating name="no-value" size="large" max={5} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Fragment>
  )
}

export default Ratings
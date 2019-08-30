import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Reviews from '../client/src/components/Reviews';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews component', () => {
  const ReviewsProps = {
    reviews: 
    [
      {
        "_id": "5d641ac6a33a1f4e1f34f78a",
        "rating": 4,
        "username": "loveyoga8614",
        "activeSinceDate": "December 13, 2015",
        "helpfulnessVotesThumbsUp": 31,
        "helpfulnessVotesThumbsDown": 1,
        "featured": true,
        "location": "miami, fl",
        "athleticType": "yogi",
        "ageRange": "i-keep-my-age-on-the-dl",
        "bodyType": "athletic",
        "whatYouLike": "beautiful in the legs",
        "whatYouDidntLike": "too thin in the legs",
        "sortableReviewDate": "2015-03-19T21:55:57.036Z",
        "reviewDate": "March 19, 2015",
        "reviewTitle": "great in the knees",
        "reviewBody": "I enjoy how amazing they are in the legs. I feel they are good and beautiful. I enjoy them, especially because they are pleasant. ",
        "wasThisReviewHelpfulYes": 12,
        "wasThisReviewHelpfulNo": 13,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f791",
        "rating": 4,
        "username": "lulufan2852",
        "activeSinceDate": "October 2, 2016",
        "helpfulnessVotesThumbsUp": 66,
        "helpfulnessVotesThumbsDown": 28,
        "featured": true,
        "location": "sydney, austraia",
        "athleticType": "runner",
        "ageRange": "55-65",
        "bodyType": "slim",
        "whatYouLike": "pleasant in the knees",
        "whatYouDidntLike": "wide in the legs",
        "sortableReviewDate": "2015-07-31T15:42:53.679Z",
        "reviewDate": "July 31, 2015",
        "reviewTitle": "perfect in the knees",
        "reviewBody": "I love how beautiful they are in the hips. I feel they are amazing and wonderful. I enjoy them, especially because they are pleasant. ",
        "wasThisReviewHelpfulYes": 7,
        "wasThisReviewHelpfulNo": 5,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f792",
        "rating": 4,
        "username": "ji5840",
        "activeSinceDate": "April 19, 2016",
        "helpfulnessVotesThumbsUp": 61,
        "helpfulnessVotesThumbsDown": 1,
        "featured": true,
        "location": "los angeles, ca",
        "athleticType": "yogi",
        "ageRange": "i-keep-my-age-on-the-dl",
        "bodyType": "muscular",
        "whatYouLike": "gorgeous in the hips",
        "whatYouDidntLike": "too heavy in the ankles",
        "sortableReviewDate": "2018-06-30T22:49:54.754Z",
        "reviewDate": "June 30, 2018",
        "reviewTitle": "good in the hips",
        "reviewBody": "I like how perfect they are in the knees. I feel they are pleasant and beautiful. I love them, especially because they are the best. I like how perfect they are in the knees. I feel they are pleasant and beautiful. I love them, especially because they are the best. ",
        "wasThisReviewHelpfulYes": 19,
        "wasThisReviewHelpfulNo": 7,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f78b",
        "rating": 3,
        "username": "yogagal6517",
        "activeSinceDate": "March 8, 2017",
        "helpfulnessVotesThumbsUp": 70,
        "helpfulnessVotesThumbsDown": 11,
        "featured": false,
        "location": "san francisco, ca",
        "athleticType": "dancer",
        "ageRange": "25-34",
        "bodyType": "muscular",
        "whatYouLike": "pleasant in the knees",
        "whatYouDidntLike": "itchy in the ankles",
        "sortableReviewDate": "2014-05-14T13:14:47.236Z",
        "reviewDate": "May 14, 2014",
        "reviewTitle": "pleasant in the hips",
        "reviewBody": "I love how great they are in the legs. I feel they are the best and great. I enjoy them, especially because they are gorgeous. I love how great they are in the legs. I feel they are the best and great. I enjoy them, especially because they are gorgeous. I love how great they are in the legs. I feel they are the best and great. I enjoy them, especially because they are gorgeous. ",
        "wasThisReviewHelpfulYes": 20,
        "wasThisReviewHelpfulNo": 12,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f790",
        "rating": 3,
        "username": "yogagal7077",
        "activeSinceDate": "December 15, 2018",
        "helpfulnessVotesThumbsUp": 78,
        "helpfulnessVotesThumbsDown": 83,
        "featured": true,
        "location": "ontario, canada",
        "athleticType": "dancer",
        "ageRange": "i-keep-my-age-on-the-dl",
        "bodyType": "curvy",
        "whatYouLike": "great in the knees",
        "whatYouDidntLike": "smelly in the knees",
        "sortableReviewDate": "2016-07-10T19:15:46.900Z",
        "reviewDate": "July 10, 2016",
        "reviewTitle": "wonderful in the hips",
        "reviewBody": "I love how the best they are in the knees. I feel they are gorgeous and the best. I like them, especially because they are wonderful. I love how the best they are in the knees. I feel they are gorgeous and the best. I like them, especially because they are wonderful. ",
        "wasThisReviewHelpfulYes": 19,
        "wasThisReviewHelpfulNo": 14,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f78d",
        "rating": 2,
        "username": "blessed5450",
        "activeSinceDate": "June 17, 2015",
        "helpfulnessVotesThumbsUp": 55,
        "helpfulnessVotesThumbsDown": 96,
        "featured": true,
        "location": "san francisco, ca",
        "athleticType": "dancer",
        "ageRange": "i-keep-my-age-on-the-dl",
        "bodyType": "slim",
        "whatYouLike": "good in the knees",
        "whatYouDidntLike": "smelly in the knees",
        "sortableReviewDate": "2019-06-23T01:24:27.481Z",
        "reviewDate": "June 22, 2019",
        "reviewTitle": "itchy in the hips",
        "reviewBody": "I do not like how small they are in the knees. I feel they are big and smelly. I dislike them, especially because they are too light. I do not like how small they are in the knees. I feel they are big and smelly. I dislike them, especially because they are too light. ",
        "wasThisReviewHelpfulYes": 8,
        "wasThisReviewHelpfulNo": 5,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f78f",
        "rating": 2,
        "username": "pants2000",
        "activeSinceDate": "June 6, 2017",
        "helpfulnessVotesThumbsUp": 9,
        "helpfulnessVotesThumbsDown": 57,
        "featured": true,
        "location": "denver, co",
        "athleticType": "yogi",
        "ageRange": "55-65",
        "bodyType": "curvy",
        "whatYouLike": "wonderful in the legs",
        "whatYouDidntLike": "loose in the ankles",
        "sortableReviewDate": "2018-02-14T20:22:37.792Z",
        "reviewDate": "February 14, 2018",
        "reviewTitle": "wide in the hips",
        "reviewBody": "I hate how too light they are in the hips. I feel they are too heavy and ugly. I dislike them, especially because they are tight. I hate how too light they are in the hips. I feel they are too heavy and ugly. I dislike them, especially because they are tight. I hate how too light they are in the hips. I feel they are too heavy and ugly. I dislike them, especially because they are tight. ",
        "wasThisReviewHelpfulYes": 0,
        "wasThisReviewHelpfulNo": 13,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f78c",
        "rating": 1,
        "username": "pants3314",
        "activeSinceDate": "July 1, 2014",
        "helpfulnessVotesThumbsUp": 57,
        "helpfulnessVotesThumbsDown": 21,
        "featured": false,
        "location": "chicago, il",
        "athleticType": "yogi",
        "ageRange": "18-24",
        "bodyType": "curvy",
        "whatYouLike": "amazing in the ankles",
        "whatYouDidntLike": "tight in the hips",
        "sortableReviewDate": "2016-05-02T03:18:04.465Z",
        "reviewDate": "May 1, 2016",
        "reviewTitle": "ugly in the legs",
        "reviewBody": "I do not like how wide they are in the hips. I feel they are small and long. I hate them, especially because they are smelly. I do not like how wide they are in the hips. I feel they are small and long. I hate them, especially because they are smelly. ",
        "wasThisReviewHelpfulYes": 15,
        "wasThisReviewHelpfulNo": 16,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f78e",
        "rating": 1,
        "username": "katie7021",
        "activeSinceDate": "December 16, 2015",
        "helpfulnessVotesThumbsUp": 71,
        "helpfulnessVotesThumbsDown": 56,
        "featured": true,
        "location": "houston, tx",
        "athleticType": "runner",
        "ageRange": "under-18",
        "bodyType": "slim",
        "whatYouLike": "pleasant in the ankles",
        "whatYouDidntLike": "ugly in the legs",
        "sortableReviewDate": "2019-04-24T02:53:38.241Z",
        "reviewDate": "April 23, 2019",
        "reviewTitle": "small in the hips",
        "reviewBody": "I dislike how tight they are in the knees. I feel they are long and narrow. I hate them, especially because they are small. ",
        "wasThisReviewHelpfulYes": 7,
        "wasThisReviewHelpfulNo": 0,
        "__v": 0
      },
      {
        "_id": "5d641ac6a33a1f4e1f34f793",
        "rating": 1,
        "username": "yogagirl2281",
        "activeSinceDate": "May 28, 2016",
        "helpfulnessVotesThumbsUp": 76,
        "helpfulnessVotesThumbsDown": 79,
        "featured": true,
        "location": "indianapolis, in",
        "athleticType": "sweaty-generalist",
        "ageRange": "45-54",
        "bodyType": "petite",
        "whatYouLike": "pleasant in the legs",
        "whatYouDidntLike": "huge in the knees",
        "sortableReviewDate": "2016-03-20T21:20:20.866Z",
        "reviewDate": "March 20, 2016",
        "reviewTitle": "tiny in the hips",
        "reviewBody": "I dislike how short they are in the legs. I feel they are big and too thin. I dislike them, especially because they are too light. I dislike how short they are in the legs. I feel they are big and too thin. I dislike them, especially because they are too light. ",
        "wasThisReviewHelpfulYes": 8,
        "wasThisReviewHelpfulNo": 13,
        "__v": 0
      }
    ]
  }

  test('renders', () => {
    const wrapper = shallow(<Reviews {...ReviewsProps}/>);
    expect(wrapper.exists()).toBe(true);
  });

});
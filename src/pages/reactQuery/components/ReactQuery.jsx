import React from "react";
import { useQuery, useMutation, useQueryClient, useQueries } from "@tanstack/react-query";
const POSTS = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function ReactQuery() {
  console.log("Posts", POSTS);
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    // Lets breakdown the knowledge and makes us understand that how does this queryKey works,
    // queryKey is the unique identifier and which type of key is set -> we will get the same type of data in queryFn
    // like we want
    // posts -> ["posts"]
    // posts/1 -> ["posts", post.id]
    // posts/authorId=1 -> ["posts", {authorId:1}]
    // posts/2/comments -> ["posts", post.id, "comments"]
    // In this way key is set and we get the respective data of the type of queryKey in queryFn
    queryKey: ["posts"],
    queryFn: (obj) =>
      wait(1000).then(() => {
        console.log(obj);
        return [...POSTS];
      }),
    // Take the things further, create the two components postsList1 and postsLists 2 and one of the two components is shown in the page using useEffect(component) and onClick on the two buttons, so whatever the component is in the page currently, its fetchStatus is fetching, the other component fetchStatus is idle and due to some reason the internet connection is lost then the fetchStatus of current page component is paused (in the fetching status and due to some reason not able to complete).
    // so what is the difference between the fetchingStatus and the normal status
    // At the page load -> query fetchingStatus is fetching and status is loading, when the query is fetched then the status will be success or error and in this case fetchStatus is idle.
    // If we want the single post from all posts then make this query after the postsQuery and enable it only when postsQuery.data.id is not equals to null otherwise it will show the error,
    // Here it is being seen that it is loading the complete posts first and then loads the single post so it loads the things in the order.
  });
  // In normal way there would be some fetch or axios request instead of [...POSTS] -> and we will get our data from API and while getting the data from API, we can perform bunch of things offered by react query.
  // The other thing which we will do from here is the use of useMutation to create a brand new post.
  const newPostMutation = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() => {
        POSTS.push({
          id: crypto.randomUUID(),
          title,
        });
      }),
    retry: 3,
    onSuccess: (data, variables, context) => {
      console.log(context);
      // till this point the loading is very much slow the reason is that this query is not in the cache and we create the newQuery then this newQuery goes into the cache. One thing which we can do is that
      //   queryClient.setQueryData(['posts', data.id], newPost) This thing does happen when we create some entry and we want to go to the common page which will have data of the query which we have created right now. so after this thing when it goes to the detail page it shows the data instantly.
      queryClient.invalidateQueries(["posts"], { exact: true });
      // So by this method when we add a new post we do want to invalidate the old post and new post array will be obtained (old array is mutated) which contains the object which is recently added.
    },
    onMutate: (variables) => {
      return { hi: "bye" };
    },
    // There exists other thing like onError, onSettled and onMutation.
    // onSuccess can has the following parameters like data, variable and context, This variables are same which we are mutating in mutation function.
    // onError can has params like error, variables and context
    // onSettled can has the params like data, error, variables and context
    // onMutate is the interesting function, if we have both mutationFn and onMutate function , This onMutate function runs even before mutation function. onMutate can has the variables as params. Here the return value of onMutate is the context for our complete query. We have seen in the console onSuccess of the query -> this hi , bye object is shown.
    // It results that if we have to do something before mutation or set some context then we use onMutate function.
    // Other important thing to note that, if we do useMutation and it fails it does not do any kind of retry like you normally get with the useQuery. This is great thing but if you want to pass a retry, then you can manually provide it. Like I have passed a retry, and it will retry for 3 times in case if error does occur and then the error will be thrown.
    // mutation have total 4 statuses, three are the same (error, loading, success) like query but there is one more status which is idle because mutation does nothing until we hit create so it's going to be in idle state until we actually hit the create.
    // we have the boolean states of these statuses which we can directly use
    // We also have mutateAsync function which will and this function will be used when you want to do specific things when the mutation does happens
    // Normally we have passed one property in the mutate function, but if you want to pass some other objects you can do that like the object for onError, but it is preferred to these things inside useMutation hook and do pass only one object in mutate function down the track.
  });
  //   postsQuery.status === 'error', 'loading' , 'success'
  //  newPostMutation.status === '' -> error, idle, loading, success
  // newPostMutation.isError, newPostMutation.isIdle, newPostMutation.isLoading, newPostMutation.isSuccess
  //   newPostMutation.mutateAsync().then(()=>{})

  // Next important thing in the react query is pagination and infinite scroll,
  // There are few changes which are made to get the pagination in the page (1): we have passed the page as object also in the queryKey along with posts
  // after that we have set keepPreviousData to true, This thing will do that when we click on the next button the time when the next data is loading it will show me the old data instead of showing me the loading state. Obviously the previous data is in the cache it will show immediately on click of the previous button.
  // For infinite scroll, there is load more button and onClick of this load more button, more entries of the data are shown and at start all the entries are not shown.
  // For this thing we need to use useInfiniteQuery hook instead of useQuery hook.
  // There are few changes in the query, it has queryKey with an addition thing in the key which is infinite
  // there is getNextPageParam along with queryKey and queryFn
  // getNextPageParam: prevData => prevData.nextPage
  // queryFn: ({ pageParam = 1}) => getPostPaginated(pageParam)
  // here the default page is 1 and when we click on the load more button the value is increased and we get more and more data. Here, getPostPaginated is a function for API call for getting data
  // useInfiniteQuery has status, error, data which is like normal query but it has further things which are isFetchingNextPage, hasNextPage and fetchNextPage functions
  // fetchNextPage function will fetch the next page
  // isFetchingNextPage -> returns true while fetching the next page
  // similarly if the current page is not the last page (complete data is not shown till now), then hasNextPage will return true.
  // Our data is broken into multiple properties like data.pages and then flatMap and map methods are used to get the data for infinite scroll
  // For previous page we will get show less button which will go back and this thing will work by getPreviousPageParam -> along with fetchPreviousPage, isFetchingPreviousPage and hasPreviousPage functions as well

  // The other thing which we can map the useQuery to get multiple posts, but this thing will be avoided using useQueries , in useQueries, we can map inside to get multiple queries. The syntax is like
  //   useQueries({
  //     queries: postsQuery.data.map(post=>{
  //         return {
  //             queryKey: ['posts', post.id],
  //             queryFn: ()=> {}
  //         }
  //     })
  //   })

  // The other thing which we can do that we can prefetch the data

  //   function onHoverPostOneLink() {
  //     queryClient.prefetchQuery({
  //         queryKey: ['posts', 1], -> Fetch the data of the post of index 1 and index 1 shows the query under the buttonClick
  //         queryFn: () => {}
  //     })
  //   }
  // This function is passed onMouseEnter of a button, so it will immediately fetch the data and will show us instantly when we click on its button because this data is in the cache,

  // We can also pass the initialData to our query. And it does not do any other fetches
  // You can set placeholder data as well
  // The difference between placeholderData and initialData is that placeholder data will be replaced by queryData when the data is fetched on the other hand initialData will serve as new fresh data if you have some staleTime.
  if (postsQuery.isLoading) return <h1>Loading ...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
        className='py-3 px-6 bg-blue-600 text-white'
      >
        Add New
      </button>
    </div>
  );
}

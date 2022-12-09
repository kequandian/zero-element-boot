import React from 'react';
import TagIndicator from '@/components/indicator/TagIndicator';
import { Center, Flex } from "@chakra-ui/react";
/**
 * 
 * @param {style} style css样式
 * 
 * @returns 
 */
export default function index(props) {


  const { children, info, question, warning, ...style } = props;

  // const img=info?''

  return React.Children.map(children, child => {
    return <div style={{ ...style }} >
      <TagIndicator color='#7c9bd1' outline>
        <Flex w='100%' padding='6px 6px 6px 0'>
          <Center w='16px' margin='0 4px'>
            {
              question && !info && !warning ?
              
                <svg svg t="1670578021182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="148432" width="16" height="16"><path d="M500.382 0.006c-177.646 19.719-276.341 96.721-296.085 230.93-3.949 43.437 17.757 67.13 65.143 71.066 23.667 3.961 43.411-13.808 59.207-53.296 23.692-82.9 80.862-124.35 171.735-124.35 110.479 7.885 169.698 63.156 177.671 165.8 0 94.759-64.313 110.202-99.248 138.774-44.267 36.218-73.217 72.952-108.655 135.216-29.779 52.314-34.91 164.227-34.91 164.227 0 47.373 21.655 71.066 65.143 71.066 39.413 0 61.194-23.693 65.155-71.066 0 0 5.219-125.594 55.925-181.129 57.472-62.942 194.749-107.071 198.698-268.922C804.365 108.561 697.772 15.789 500.382 0.006zM500.382 859.162c-45.524 0-82.409 36.91-82.409 82.41 0 45.523 36.885 82.422 82.409 82.422s82.422-36.898 82.422-82.422c0-45.5-36.898-82.41-82.422-82.41z" fill="#60666c" p-id="148433"></path></svg>
                : (!question && info && !warning) ?
                <svg t="1670578850615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="173288" width="16" height="16"><path d="M580.775 840.595V310.77l-208.873 56.039v56.04c54.288-13.532 78.089 33.99 71.323 142.646v275.102c6.766 95.122-18.708 139.222-76.418 132.455v50.944h290.385V973.05c-57.789 6.766-83.262-37.333-76.417-132.455z" fill="#60666c" p-id="173289"></path><path d="M514.548 109.538m-109.531 0a109.531 109.531 0 1 0 219.062 0 109.531 109.531 0 1 0-219.062 0Z" fill="#60666c" p-id="173290"></path></svg>
                  : (!question && !info && warning) ?
                  <svg t="1670578640940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="153953" width="20" height="20"><path d="M512 834.334c-52.369 0-94.83 42.461-94.83 94.83s42.46 94.829 94.83 94.829 94.83-42.46 94.83-94.829-42.461-94.83-94.83-94.83zM512 723.005c93.502 0 94.83-575.8 94.83-628.169 0-52.37-42.461-94.83-94.83-94.83s-94.83 42.46-94.83 94.83c0 52.369 1.328 628.169 94.83 628.169z" fill="#60666c" p-id="153954"></path></svg>
                    : <></>
            }
          </Center>
          {child}
        </Flex>
      </TagIndicator>
    </div >
  })
}
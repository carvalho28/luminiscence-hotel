import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => {
    return (
        <chakra.svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
            }}
            viewBox="0 0 1638 1638"
            {...props}
        >
            <path
                d="M1055.54 1558.5c-64.832 21.067-128.758 40.776-195.771 43.483-132.41 5.349-263.792-.33-389.142-50.326-99.731-39.777-174.814-109.509-232.387-198.13-84.954-130.771-147.456-271.71-183.897-423.763-16.757-69.922-13.294-140.594-7.909-211.284 8.34-109.483 30.702-215.945 78.934-315.02 21.416-43.992 50.704-84.151 76.934-127.281 32.345-31.149 64.173-61.066 97.911-92.353 4.22-3.322 6.53-5.274 8.84-7.226C485.803 61.593 682.252 26.501 888.273 41.767c232.446 17.225 409.233 134.336 539.099 323.552 71.701 104.468 128.718 217.185 161.358 340.767 18.54 70.198 18.459 141.502 10.588 212.913-12.87 116.756-46.839 226.265-112.408 325.117-70.062 105.625-164.482 183.617-275.086 242.438-50.1 26.643-103.192 47.658-156.284 71.946m48.22-989.955c-.206-3.939-.412-7.877-1.1-14.844-5.366-9.43-8.396-22.837-16.504-27.597-34.122-20.035-69.854-18.156-104.485-.016-15.616 8.18-20.588 20.981-11.221 38.549 0 0 .01 1.219-1.626 3.961-1.957 7.647-7.329 16.431 5.688 22.138l-11.996 16.017c-69.589-9.449-139.893-10.499-210.328-2.296-12.453 1.45-24.191 2.825-17.776 18.692h218.361c10.952-4.858 16.524-7.329 18.494-7.037l-4.461 9.349c23.531-1.94 45.978-5.224 68.426-5.235 22.139-.012 44.281 3.29 67.09 5.193 0-5.758 0-11.632.244-20.956-.165-5.631-.33-11.261-.128-19.913.203-4.034.406-8.068 1.322-16.005M556.765 869.416c5.068 3.138 13.807 5.582 14.554 9.536 2.914 15.415 3.158 31.321 4.674 47.018.778 8.05 2.144 16.044 3.244 24.063l9.187-1.151c-2.856-26.003-3.76-52.431-9.288-77.853-3.421-15.738-15.942-16.383-31.33-2.568l-9.303 15.214c-15.821-23.915-17.242-24.255-37.955-12.219-.827-.75-1.655-1.501-3.047-5.119l-2.745-8.407c-8.881 30.561-10.322 60.324 2.305 89.645l14.833-73.648c26.795 20.41 11.389 49.663 23.834 74.735 6.897-28.506 12.802-52.909 21.037-79.246m168.517-327.964 12.247 10.86c74.7-19.111 149.114-18.351 223.429.527 6.401-17.461-6.273-19.379-16.864-21.796-72.746-16.597-145.03-14.295-216.563 2.365-2.291-9.79-4.582-19.58-3.83-30.095 8.461-24.34 4.524-37.309-17.464-48.942-11.427-6.045-24.138-10.556-36.803-13.2-41.747-8.716-81.11-3.033-115.231 24.366-13.644 10.956-12.108 28.245 3.596 37.423-11.062 9.212-14.495 20.659-8.188 37.647l-3.995 26.866c61.4-23.556 120.517-22.221 184.605-.671-3.872-10.056-6.289-16.336-4.939-25.35m15.493-92.707-10.162 32.491 5.111 3.831c34.654-22.558 73.235-27.808 112.878-28.238 39.547-.428 77.353 7.197 116.586 23.771-3.677-13.019-7.354-26.037-8.201-38.648 1.683-.302 4.703-.293 4.856-.951 6.699-28.763 1.28-43.529-24.024-58.772-11.662-7.024-24.67-12.631-37.792-16.269-54.97-15.241-107.116-8.655-154.584 24.133-16.494 11.393-17.797 44.661-4.668 58.652m-221.024 753.486c23.707 58.464 80.284 70.833 118.185 25.289 9.16-11.008 16.797-23.775 22.829-36.8 16.205-34.996 18.985-71.684 8.232-109.411 19.191-6.861 36.901-12.499 53.906-19.781 4.029-1.725 5.697-8.965 8.451-13.668-5.159-1.89-10.248-4.996-15.498-5.299-4.479-.258-9.187 2.59-13.719 4.264-23.834 8.805-47.873 21.108-68.047-7.159-2.06-2.886-7.196-4.059-11.15-5.034-29.892-7.368-53.944 4.837-72.135 26.426-33.772 40.079-43.969 86.881-31.054 141.173m-95.123 73.507 14.231 8.413c2.226-5.237 6.259-10.429 6.393-15.72 1.051-41.621 1.217-83.264 1.937-124.895.588-33.972 2.088-67.94 1.84-101.9-.04-5.528-7.057-11.005-10.849-16.506-3.437 5.566-7.4 10.893-10.085 16.801-1.308 2.878-.232 6.84-.232 10.312v108.816l-82.972 5.484c-.206-4.499-.647-7.154-.399-9.743 3.633-37.916 7.791-75.792 10.599-113.768.425-5.75-5.328-11.957-8.223-17.952-4.092 4.508-11.297 8.697-11.795 13.572-5.214 50.965-10.782 101.973-13.157 153.113-1.111 23.923 3.843 48.267 7.695 72.155.729 4.523 9.212 7.796 14.116 11.646 2.4-5.124 6.44-10.14 6.785-15.399.437-6.674-2.295-13.518-3.368-20.335-7.846-49.851-7.824-49.868 41.519-53.982 6.203-.518 12.444-.608 18.636-1.225 12.999-1.295 16.825 5.071 16.559 17.257-.514 23.517.032 47.058.77 73.856m609.237-235.333c-2.189 12.907-5.967 25.774-6.296 38.729-1.473 58.032-2.478 116.091-2.18 174.133.039 7.515 9.534 21.868 13.141 21.401 32.574-4.215 64.877-10.724 97.032-17.621 2.802-.601 6.459-9.674 5.186-13.156-1.163-3.183-8.566-5.872-13.053-5.634-6.688.354-13.146 3.849-19.85 5.339-19.138 4.255-38.351 8.172-60.184 12.781l-3.613-67.244c15.684-3.087 28.896-4.527 41.22-8.633 5.619-1.872 9.486-9.007 14.148-13.754-6.495-2.364-13.051-6.808-19.472-6.623-10.716.31-21.345 3.582-37.62 6.673 3.722-36.942 6.614-70.338 11.087-103.521.504-3.739 9.743-8.46 15.272-8.961 17.209-1.561 34.647-.619 51.852-2.208 4.799-.444 9.099-6.292 13.628-9.661-3.891-3.979-7.965-11.555-11.644-11.368-28.792 1.466-57.508 4.422-88.654 9.328M858.93 1015.69c-18.598 1.694-37.344 2.492-55.715 5.548-6.781 1.128-12.677 7.574-18.977 11.594 6.515 3.187 12.964 8.871 19.56 9.048 14.257.382 28.59-2.061 44.31-3.475-.505 6.063-1.022 10.672-1.254 15.296-3.398 67.766-7.002 135.524-9.7 203.317-.234 5.892 5.555 12.024 8.546 18.044 4.047-6.008 10.446-11.592 11.619-18.117 2.061-11.452.59-23.497 1.176-35.264 3.055-61.404 6.293-122.8 9.546-185.72 20.327-1.002 36.26-.74 51.812-3.049 6.609-.981 12.419-7.349 18.593-11.268-5.888-3.304-11.742-9.338-17.669-9.411-19.336-.238-38.7 1.698-61.847 3.457m-60.993-297.17h-62.964v29.409h226.083v-29.407c-53.688 0-106.325 0-163.119-.002m464.564 325.616c.039-6.935 1.335-14.174-.244-20.719-1.538-6.383-6.016-12.056-9.203-18.041-4.029 6.154-10.664 11.946-11.579 18.532-2.373 17.073-2.788 34.49-2.983 51.78-.645 57.441-.798 114.888-1.254 172.331-.14 17.533 7.094 26.785 25.449 21.962 15.989-4.202 31.986-8.841 47.247-15.077 4.801-1.961 7.233-9.719 10.749-14.824-5.802-1.967-12.123-6.471-17.305-5.41-13.922 2.848-27.358 8.075-41.272 12.447 0-67.937 0-133.44.395-202.981m-437.07-542.94c46.533-3.199 91.845 2.731 135.767 19.601 1.865-22.617 2.31-24.02-12.743-28.796-66.466-21.091-133.131-21.924-199.853-.232-15.409 5.01-18.818 14.198-14.48 25.779 29.577-5.492 58.558-10.873 91.309-16.352M606.278 749.304H726.06v-26.95H547.716v26.949l58.562.001m274.399-110.408c-44.899 1.824-89.82 3.28-134.667 5.977-5.092.307-9.764 7.585-18.246 14.635h233.22c-1.652-7.546-6.526-14.494-12.225-15.253-21.215-2.828-42.701-3.624-68.082-5.359m68.299-68.999c-66.078-12.176-132.272-11.073-198.443-1.164-16.418 2.458-16.304 3.217-14.925 16.351 37.904-2.427 75.724-6.748 113.542-6.733 37.588.015 75.174 4.39 118.993 7.262-7.576-7.22-11.657-11.11-19.167-15.716M733.355 692.924c3.575 1.889 7.179 5.469 10.719 5.406 35.923-.636 71.829-2.288 107.752-2.813 36.418-.533 72.851-.118 109.277-.118-1.901-6.603-6.913-12.639-11.962-12.671-69.051-.438-138.107-.126-207.159.414-2.898.023-5.765 4.078-8.627 9.782m233.941 49.934c2.266 2.078 4.517 5.947 6.801 5.967 42.12.363 84.243.266 126.939.266v-24.04c-41.819 0-81.999-.401-122.143.618-4.033.102-7.848 8.804-11.597 17.189M721.508 633.326c-53.903-.289-107.806-.661-161.71-.801-11.59-.03-16.133 5.098-11.621 15.386 56.119 0 110.676-.449 165.214.347 12.119.176 18.336-.143 8.117-14.932m-78.689-67.958c-27.408 2.807-54.904 5.009-82.152 8.924-5.54.796-10.153 8.049-15.193 12.325l4.103 4.401c58.874-15.596 117.921-14.576 178.445-2.975-3.755-6.432-8.45-12.259-13.994-13.228-22.36-3.906-44.982-6.312-71.209-9.447m104.798 383.549 9.325.047c-1.145-25.475-1.563-51.022-4.054-76.364-.495-5.032-8.611-12.476-13.802-13.004-5.276-.537-12.516 5.042-16.653 9.866-5.08 5.922-7.834 13.838-13.074 23.672l-4.096-29.033-6.648.439c-1.956 28.913-6.268 57.856 3.805 86.844 14.169-26.728 9.033-61.206 34.26-81.981l9.607 1.317c.225 24.875.449 49.75 1.33 78.197M622.988 659.354c-21.361 1.088-42.77 1.674-64.049 3.645-4.881.453-9.32 5.675-13.962 8.702l3.288 4.24h178.818l1.445-9.371c-32.681-9.313-67.274-6.824-105.54-7.216m477.141 235.18 1.505 55.918 7.256.311c1.405-4.88 2.786-9.768 4.219-14.639 5.073-17.235 9.467-34.72 15.642-51.551 2.05-5.588 8.695-9.491 13.239-14.164 2.979 5.572 7.868 10.92 8.554 16.762 1.611 13.713 1.299 27.659 1.592 41.515.178 8.382.033 16.771.033 25.157l7.057-.082c2.8-28.559 8.335-57.486-4.262-85.508-6.359-14.145-17.63-11.916-26.429-1.421-5.816 6.937-9.791 15.419-15.711 25.027l-3.209-27.877-6.039-.09c-1.124 8.929-2.249 17.859-3.447 30.642M672.014 612.267l54.846 6.122c-2.116-7.431-6.18-13.132-11.19-14.143-52.868-10.663-105.896-9.886-158.719.406-4.341.846-7.713 6.663-12.395 10.959 43.773-1.251 83.628-2.391 127.458-3.344m-40.432 78.035c-22.776.606-45.578.765-68.31 2.113-6.109.362-12.004 4.34-17.997 6.658l2.358 5.318h181.096c-10.921-14.109-10.921-14.109-97.147-14.089M387.226 886.371c1.002 13.08.56 26.506 3.577 39.103 1.67 6.974 8.737 17.109 14.079 17.567 6.015.516 14.565-7.044 18.884-13.264 6.442-9.275 10.145-20.452 15.014-30.821l3.653.398v42.615l4.693-.295v-90.656c-16.575 26.947-15.079 61.192-38.932 83.369l-8.83-.88-3.931-74.245-3.73-.075c-1.402 7.813-2.803 15.627-4.477 27.184m562.8 61.295c19.397 8.476 34.647-.735 34.102-22.389-3.361 2.685-5.69 5.061-8.468 6.657-5.514 3.166-12.577 9.388-16.588 7.891-4.506-1.683-8.27-10.289-8.92-16.257-1.105-10.152-1.73-21.372 1.546-30.702 3.346-9.53 11.631-17.325 17.753-25.88l17.177 18.077c5.188-12.469 4.293-22.472-6.686-25.653-7.716-2.236-20.477.769-26.263 6.339-16.95 16.317-18.542 54.972-3.653 81.917m350.059-79.205 18.261-2.683c-29.078-13.242-37.849-8.68-40.639 18.432-1.273 12.364-2.304 24.96-1.325 37.282.76 9.555 3.46 26.091 7.66 26.876 11.759 2.197 24.744-2.163 37.244-3.935l-1.29-7.763-31.986 4.283-1.916-20.563 23.491-11.445-28.132-3.07c5.807-14.324 10.457-25.792 18.632-37.414m-238.474-4.55c-24.871-12.613-37.993-6.209-39.397 19.859-.929 17.239-1.517 34.588-.51 51.785.297 5.058 6.644 13.933 10.088 13.87 11.442-.207 22.824-3.687 34.229-5.911l-1.176-6.255-32.718 3.784a96852.56 96852.56 0 0 1-1.465-20.678l19.154-8.67-1.551-4.143h-18.78c.91-8.672 1.58-16.126 2.512-23.547.591-4.711 1.571-9.374 2.432-14.38 8.864-1.069 17.017-2.052 27.182-5.714m142.38 50.243c3.334-13.194 4.731-27.324 10.533-39.325 6.136-12.688 16.321-11.092 22.261 1.662 1.447 3.107 2.983 6.173 4.478 9.258l7.068-4.016c-4.801-8.122-8.032-20.736-14.839-23.114-6.924-2.418-20.594 2.661-25.669 8.984-15.289 19.048-15.449 42.779-9.861 65.191 1.956 7.845 14.218 19.618 19.794 18.613 9.501-1.712 17.438-12.11 26.032-18.859l-3.966-4.445c-27.955 19.295-31.75 18.189-35.831-13.949m-102.446-245.493c-1.588-3.282-3.14-9.409-4.77-9.43a4903.772 4903.772 0 0 0-124.283-.047c-2.186.028-4.303 5.651-8.339 11.32 47.767 0 91.202 0 137.392-1.843M886.004 912.237c1.862 2.916 4.435 5.607 5.441 8.793 2.278 7.219 3.784 14.681 5.604 22.045-6.783-2.546-13.538-5.174-20.381-7.546-1.02-.354-2.455.493-5.13 1.12 3.415 14.31 11.784 21.9 26.024 17.453 14.348-4.481 13.466-16.771 7.673-27.205-6.996-12.6-17.244-23.436-23.85-36.192-2.82-5.445-2.522-17.762.868-19.941 5.161-3.316 14.273-.851 21.642-.153 2.356.224 4.505 2.633 9.236 5.606-2.741-18.421-11.909-22.979-25.116-19.259-12.743 3.588-23.907 10.983-19.372 26.364 2.815 9.549 10.085 17.784 17.361 28.915m-84.074-50.195c-1.891 25.885-4.176 51.755-5.191 77.675-.131 3.352 6.491 10.08 9.664 9.89 11.434-.686 22.731-3.664 34.079-5.776l-1.237-6.439-32.564 4.006-2.25-21.021 20.281-8.55-.642-3.465-20.715-1.167 4.93-37.04 28.412-4.606-.435-6.554c-10.404.489-20.808.978-34.332 3.047m221.113-161.022-56.8 3.122.612 7.445h135.667l.44-8.091c-25.267-.825-50.533-1.65-79.919-2.476m-.116-12.029h79.737c-16.849-15.499-124.452-14.052-136.537 2.98 18.643-1.056 35.642-2.019 56.8-2.98m-39.112-43.137h119.178c-19.391-18.668-120.218-18.337-137.211 1.329 5.926-.341 10.263-.59 18.033-1.329M632.93 858.625c-2.237 2.468-6.864 6.358-6.365 7.196 16.897 28.387 5.899 57.029 2.266 87.495l33.172-7.512c-23.771-10.857-23.843-66.612-3.571-87.466-8.491 0-15.234 0-25.502.287m-301.892 62.934v-70.634l-6.924.117v100.24l29.113-11.141.515-6.598c-9.433.67-23.884 10.446-22.704-11.984Z"
                style={{
                    fill: "#2f6f91",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M308.353 175.461c-1.61 3.088-3.92 5.04-7.367 7.199 1.465-2.64 4.066-5.488 7.367-7.199Z"
                style={{
                    fill: "#efefef",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="m129.167 29.167-1.395-1.623c.32.191.64.383 1.178 1.099l.217.524Z"
                style={{
                    fill: "#f0f0f1",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M519 1200.74c-12.164-52.803-1.967-99.605 31.805-139.684 18.191-21.589 42.243-33.794 72.135-26.426 3.954.975 9.09 2.148 11.15 5.034 20.174 28.267 44.213 15.964 68.047 7.159 4.532-1.674 9.24-4.522 13.719-4.264 5.25.303 10.339 3.409 15.498 5.299-2.754 4.703-4.422 11.943-8.451 13.668-17.005 7.282-34.715 12.92-53.906 19.781 10.753 37.727 7.973 74.415-8.232 109.411-6.032 13.025-13.669 25.792-22.829 36.8-37.901 45.544-94.478 33.175-118.936-26.778m17.718-24.787c.65 5.504.38 11.317 2.112 16.457 6.757 20.051 18.674 36.336 40.495 40.363 20.8 3.839 36.188-7.406 46.649-24.315 7.933-12.825 15.369-26.382 20.273-40.565 9.391-27.159 14.251-54.903-.646-79.94l-90.325 4.342c-13.893 22.374-20.826 49.999-18.558 83.658m84.742-108.732c1.449-2.378 4.553-6.453 4.108-6.887-14.105-13.75-36.69-9.571-49.391 11.393 15.296-1.435 28.669-2.69 45.283-4.506Z"
                style={{
                    fill: "#e2e6e8",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M424.312 1274.1c-.422-25.165-.968-48.706-.454-72.223.266-12.186-3.56-18.552-16.559-17.257-6.192.617-12.433.707-18.636 1.225-49.343 4.114-49.365 4.131-41.519 53.982 1.073 6.817 3.805 13.661 3.368 20.335-.345 5.259-4.385 10.275-6.785 15.399-4.904-3.85-13.387-7.123-14.116-11.646-3.852-23.888-8.806-48.232-7.695-72.155 2.375-51.14 7.943-102.148 13.157-153.113.498-4.875 7.703-9.064 11.795-13.572 2.895 5.995 8.648 12.202 8.223 17.952-2.808 37.976-6.966 75.852-10.599 113.768-.248 2.589.193 5.244.399 9.743l82.972-5.484v-108.816c0-3.472-1.076-7.434.232-10.312 2.685-5.908 6.648-11.235 10.085-16.801 3.792 5.501 10.809 10.978 10.849 16.506.248 33.96-1.252 67.928-1.84 101.9-.72 41.631-.886 83.274-1.937 124.895-.134 5.291-4.167 10.483-6.393 15.72-4.744-2.804-9.487-5.608-14.547-10.046Z"
                style={{
                    fill: "#dee3e6",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1035.07 1039.2c29.942-3.701 58.658-6.657 87.45-8.123 3.679-.187 7.753 7.389 11.644 11.368-4.529 3.369-8.829 9.217-13.628 9.661-17.205 1.589-34.643.647-51.852 2.208-5.529.501-14.768 5.222-15.272 8.961-4.473 33.183-7.365 66.579-11.087 103.521 16.275-3.091 26.904-6.363 37.62-6.673 6.421-.185 12.977 4.259 19.472 6.623-4.662 4.747-8.529 11.882-14.148 13.754-12.324 4.106-25.536 5.546-41.22 8.633l3.613 67.244c21.833-4.609 41.046-8.526 60.184-12.781 6.704-1.49 13.162-4.985 19.85-5.339 4.487-.238 11.89 2.451 13.053 5.634 1.273 3.482-2.384 12.555-5.186 13.156-32.155 6.897-64.458 13.406-97.032 17.621-3.607.467-13.102-13.886-13.141-21.401-.298-58.042.707-116.101 2.18-174.133.329-12.955 4.107-25.822 7.5-39.934Z"
                style={{
                    fill: "#dfe4e7",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M742.019 445.748c-14.373-10.997-13.07-44.265 3.424-55.658 47.468-32.788 99.614-39.374 154.584-24.133 13.122 3.638 26.13 9.245 37.792 16.269 25.304 15.243 30.723 30.009 24.024 58.772-.153.658-3.173.649-6.255.841-1.398-.11-1.217-.184-1.928-1.714-4.518-1.924-8.324-2.318-12.096-2.621.033.09.221.043 1.572-1.146-37.109-40.738-145.922-45.965-201.499 3.33-1.055.936-.095 4.143.054 6.262.129-.028.328-.202.328-.202Z"
                style={{
                    fill: "#e7eaeb",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M860.827 1015.36c21.25-1.43 40.614-3.366 59.95-3.128 5.927.073 11.781 6.107 17.669 9.411-6.174 3.919-11.984 10.287-18.593 11.268-15.552 2.309-31.485 2.047-51.812 3.049-3.253 62.92-6.491 124.316-9.546 185.72-.586 11.767.885 23.812-1.176 35.264-1.173 6.525-7.572 12.109-11.619 18.117-2.991-6.02-8.78-12.152-8.546-18.044 2.698-67.793 6.302-135.551 9.7-203.317.232-4.624.749-9.233 1.254-15.296-15.72 1.414-30.053 3.857-44.31 3.475-6.596-.177-13.045-5.861-19.56-9.048 6.3-4.02 12.196-10.466 18.977-11.594 18.371-3.056 37.117-3.854 57.612-5.877ZM954.173 441.635c3.661 12.925 7.338 25.943 11.015 38.962-39.233-16.574-77.039-24.199-116.586-23.771-39.643.43-78.224 5.68-112.878 28.238l-5.111-3.831c3.388-10.83 6.775-21.661 10.784-33.988.622-1.497.423-1.323 1.853-1.382 42.292-19.519 85.259-27.32 130.135-21.263 22.964 3.1 45.61 8.556 68.4 12.947 0 0-.188.047.207 1.656 4.389 1.889 8.384 2.171 12.379 2.452 0 0-.181.074-.198-.02Z"
                style={{
                    fill: "#e3e7e9",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="m974.868 613.345-22.095 9.801H734.412c-6.415-15.867 5.323-17.242 17.776-18.692 70.435-8.203 140.739-7.153 210.328 2.296 4.078-5.444 8.037-10.731 12.238-17.572.242-1.554.069-1.638 1.705-.827 40.044-7.828 78.321-10.284 116.516 2.333 2.472.816 6.18-2.113 9.297-3.214-.017.087-.202.098-.202.098.166 5.631.331 11.261.385 18.691-.111 1.799-.206 1.898-2.009 1.894-36.415-13.214-71.941-14.051-107.716-6.622-5.796 1.203-10.599 7.19-16.193 10.958-.331-.008-1.669.856-1.669.856Z"
                style={{
                    fill: "#dee3e6",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="m800.016 718.518 161.04.001v29.407H734.973v-29.409l65.043.001Z"
                style={{
                    fill: "#e3e7e9",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1262.3 1046.15c-.198 67.523-.198 133.026-.198 200.963 13.914-4.372 27.35-9.599 41.272-12.447 5.182-1.061 11.503 3.443 17.305 5.41-3.516 5.105-5.948 12.863-10.749 14.824-15.261 6.236-31.258 10.875-47.247 15.077-18.355 4.823-25.589-4.429-25.449-21.962.456-57.443.609-114.89 1.254-172.331.195-17.29.61-34.707 2.983-51.78.915-6.586 7.55-12.378 11.579-18.532 3.187 5.985 7.665 11.658 9.203 18.041 1.579 6.545.283 13.784.047 22.737Z"
                style={{
                    fill: "#e2e6e8",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M556.009 499.631c-13.914-5.852-15.45-23.141-1.806-34.097 34.121-27.399 73.484-33.082 115.231-24.366 12.665 2.644 25.376 7.155 36.803 13.2 21.988 11.633 25.925 24.602 16.019 49.404-1.445.462-1.193.456-1.684-.929-3.076-1.913-5.661-2.442-8.191-2.858.054.111.302.11.418-1.454-42.529-33.958-113.476-32.594-156.818 1.364-.036-.086.028-.264.028-.264Z"
                style={{
                    fill: "#e3e7e9",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M823.546 501.242c-30.866 5.43-59.847 10.811-89.424 16.303-4.338-11.581-.929-20.769 14.48-25.779 66.722-21.692 133.387-20.859 199.853.232 15.053 4.776 14.608 6.179 12.743 28.796-43.922-16.87-89.234-22.8-137.652-19.552Z"
                style={{
                    fill: "#e2e6e8",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M604.204 749.3h-56.488v-26.949H726.06v26.95l-121.856-.001Z"
                style={{
                    fill: "#dbe1e5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M556.904 501.294c-.895-1.663-.959-1.485.365.16 41.261-11.95 81.815-18.196 123.696-8.626 10.574 2.416 21.146 4.845 31.718 7.267 0 0-.248.001.026 1.38 2.968 1.837 5.661 2.295 8.354 2.753 0 0-.252.006-.328-.093 2.214 9.69 4.505 19.48 6.795 31.069-.001 1.799-.264 2.187-1.731 1.516-60.551-29.699-119.409-29.195-178.096.69-.052.015.011-.048.011-.048-4.41-13.746-.977-25.193 9.19-36.068Z"
                style={{
                    fill: "#dee3e6",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M727.266 537.391s.263-.388.158-.333c71.64-20.313 143.924-22.615 216.67-6.018 10.591 2.417 23.265 4.335 16.864 21.796-74.315-18.878-148.729-19.638-223.429-.527-3.861-3.423-8.054-7.141-14.005-9.432-1.757 1.427-2.629.941-.66 1.26 2.78-2.036 3.591-4.391 4.402-6.746Z"
                style={{
                    fill: "#dfe4e7",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M882.675 638.982c23.383 1.646 44.869 2.442 66.084 5.27 5.699.759 10.573 7.707 12.225 15.253h-233.22c8.482-7.05 13.154-14.328 18.246-14.635 44.847-2.697 89.768-4.153 136.665-5.888ZM950.69 570.252c5.796 4.248 9.877 8.138 17.453 15.358-43.819-2.872-81.405-7.247-118.993-7.262-37.818-.015-75.638 4.306-113.542 6.733-1.379-13.134-1.493-13.893 14.925-16.351 66.171-9.909 132.365-11.012 200.157 1.522ZM720.895 543.818s.872.486.745.426c2.292 6.219 4.709 12.499 8.581 22.555-64.088-21.55-123.205-22.885-184.605.671 1.497-10.067 2.746-18.466 3.047-28.487-.949-1.621-1.012-1.558-.761.473 3.863 2.43 7.878 4.067 11.027 3.042 54.18-17.637 108.118-16.21 161.966 1.32Z"
                style={{
                    fill: "#dbe1e5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M733.345 691.157c2.872-3.94 5.739-7.995 8.637-8.018 69.052-.54 138.108-.852 207.159-.414 5.049.032 10.061 6.068 11.962 12.671-36.426 0-72.859-.415-109.277.118-35.923.525-71.829 2.177-107.752 2.813-3.54.063-7.144-3.517-10.729-7.17Z"
                style={{
                    fill: "#dee3e6",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M970.596 563.429c-9.513-16.363-4.541-29.164 11.075-37.344 34.631-18.14 70.363-20.019 104.485.016 8.108 4.76 11.138 18.167 15.373 29.729-19.762-4.056-38.103-14.04-57.096-15.489-24.853-1.896-52.315-3.329-69.476 22.247.1-.026.187-.215-1.057-.41-1.93.287-2.617.769-3.304 1.251Z"
                style={{
                    fill: "#e7eaeb",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M967.213 741.018c3.832-6.548 7.647-15.25 11.68-15.352 40.144-1.019 80.324-.618 122.143-.618v24.04c-42.696 0-84.819.097-126.939-.266-2.284-.02-4.535-3.889-6.884-7.804Z"
                style={{
                    fill: "#dbe1e5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M723.03 633.941c8.697 14.171 2.48 14.49-9.639 14.314-54.538-.796-109.095-.347-165.214-.347-4.512-10.288.031-15.416 11.621-15.386 53.904.14 107.807.512 163.232 1.419Z"
                style={{
                    fill: "#dee3e6",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M644.67 565.452c24.376 3.048 46.998 5.454 69.358 9.36 5.544.969 10.239 6.796 13.994 13.228-60.524-11.601-119.571-12.621-178.445 2.975l-4.103-4.401c5.04-4.276 9.653-11.529 15.193-12.325 27.248-3.915 54.744-6.117 84.003-8.837Z"
                style={{
                    fill: "#dbe1e5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M747.288 947.128c-.552-26.661-.776-51.536-1.001-76.411l-9.607-1.317c-25.227 20.775-20.091 55.253-34.26 81.981-10.073-28.988-5.761-57.931-3.805-86.844l6.648-.439 4.096 29.033c5.24-9.834 7.994-17.75 13.074-23.672 4.137-4.824 11.377-10.403 16.653-9.866 5.191.528 13.307 7.972 13.802 13.004 2.491 25.342 2.909 50.889 4.054 76.364-3.108-.016-6.217-.031-9.654-1.833Z"
                style={{
                    fill: "#c6d3db",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M625.058 659.351c36.196.392 70.789-2.097 103.47 7.216l-1.445 9.371H548.265l-3.288-4.24c4.642-3.027 9.081-8.249 13.962-8.702 21.279-1.971 42.688-2.557 66.119-3.645Z"
                style={{
                    fill: "#cad6dd",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1100.17 892.604c1.161-10.856 2.286-19.786 3.41-28.715l6.039.09 3.209 27.877c5.92-9.608 9.895-18.09 15.711-25.027 8.799-10.495 20.07-12.724 26.429 1.421 12.597 28.022 7.062 56.949 4.262 85.508l-7.057.082c0-8.386.145-16.775-.033-25.157-.293-13.856.019-27.802-1.592-41.515-.686-5.842-5.575-11.19-8.554-16.762-4.544 4.673-11.189 8.576-13.239 14.164-6.175 16.831-10.569 34.316-15.642 51.551-1.433 4.871-2.814 9.759-4.219 14.639l-7.256-.311c-.502-18.639-1.004-37.278-1.468-57.845Z"
                style={{
                    fill: "#c6d3db",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M502.806 873.93c18.455-14.513 19.876-14.173 35.697 9.742 3.341-5.465 6.322-10.34 11.326-15.586 2.884.84 3.745 2.051 4.606 3.262l-18.707 77.311c-12.445-25.072 2.961-54.325-23.834-74.735l-14.833 73.648c-12.627-29.321-11.186-59.084-2.305-89.645.915 2.802 1.83 5.605 2.362 11.163-.383 7.098-.383 11.441-.383 15.783l2.44.12 3.631-11.063ZM670.027 612.171c-41.843 1.046-81.698 2.186-125.471 3.437 4.682-4.296 8.054-10.113 12.395-10.959 52.823-10.292 105.851-11.069 158.719-.406 5.01 1.011 9.074 6.712 11.19 14.143-18.282-2.041-36.564-4.081-56.833-6.215Z"
                style={{
                    fill: "#cdd8de",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M633.557 690.301c84.251-.022 84.251-.022 95.172 14.087H547.633l-2.358-5.318c5.993-2.318 11.888-6.296 17.997-6.658 22.732-1.348 45.534-1.507 70.285-2.111Z"
                style={{
                    fill: "#dbe1e5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1102.25 586.057c-.184 1.511.001 1.5-1.468.701-15.133-5.469-28.494-12.545-42.522-14.305-28.962-3.634-58.551-5.882-83.441 15.087 0 0 .173.084.233.013-13.561-2.527-8.189-11.311-4.274-20.309 2.759-2.525 3.56-3.698 4.362-4.871 0 0-.087.189 1.448.295 44.604-15.128 86.801-19.103 126.454 9.777-.202 4.034-.405 8.068-.792 13.612Z"
                style={{
                    fill: "#e3e7e9",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M387.362 884.496c1.538-9.685 2.939-17.499 4.341-25.312l3.73.075 3.931 74.245 8.83.88c23.853-22.177 22.357-56.422 38.932-83.369v90.656l-4.693.295v-42.615l-3.653-.398c-4.869 10.369-8.572 21.546-15.014 30.821-4.319 6.22-12.869 13.78-18.884 13.264-5.342-.458-12.409-10.593-14.079-17.567-3.017-12.597-2.575-26.023-3.441-40.975Z"
                style={{
                    fill: "#cdd8de",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M948.919 946.544c-13.782-25.826-12.19-64.481 4.76-80.798 5.786-5.57 18.547-8.575 26.263-6.339 10.979 3.181 11.874 13.184 6.686 25.653l-17.177-18.077c-6.122 8.555-14.407 16.35-17.753 25.88-3.276 9.33-2.651 20.55-1.546 30.702.65 5.968 4.414 14.574 8.92 16.257 4.011 1.497 11.074-4.725 16.588-7.891 2.778-1.596 5.107-3.972 8.468-6.657.545 21.654-14.705 30.865-35.209 21.27ZM1298.32 868.535c-6.412 11.545-11.062 23.013-16.869 37.337l28.132 3.07-23.491 11.445 1.916 20.563 31.986-4.283 1.29 7.763c-12.5 1.772-25.485 6.132-37.244 3.935-4.2-.785-6.9-17.321-7.66-26.876-.979-12.322.052-24.918 1.325-37.282 2.79-27.112 11.561-31.674 40.639-18.432-6.087.894-12.174 1.789-20.024 2.76Z"
                style={{
                    fill: "#cad6dd",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1060.61 865.247c-9.159 2.323-17.312 3.306-26.176 4.375-.861 5.006-1.841 9.669-2.432 14.38-.932 7.421-1.602 14.875-2.512 23.547h18.78l1.551 4.143-19.154 8.67 1.465 20.678 32.718-3.784 1.176 6.255c-11.405 2.224-22.787 5.704-34.229 5.911-3.444.063-9.791-8.812-10.088-13.87-1.007-17.197-.419-34.546.51-51.785 1.404-26.068 14.526-32.472 38.391-18.52Z"
                style={{
                    fill: "#d5dee2",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1204.01 915.91c4.059 30.379 7.854 31.485 35.809 12.19l3.966 4.445c-8.594 6.749-16.531 17.147-26.032 18.859-5.576 1.005-17.838-10.768-19.794-18.613-5.588-22.412-5.428-46.143 9.861-65.191 5.075-6.323 18.745-11.402 25.669-8.984 6.807 2.378 10.038 14.992 14.839 23.114l-7.068 4.016c-1.495-3.085-3.031-6.151-4.478-9.258-5.94-12.754-16.125-14.35-22.261-1.662-5.802 12.001-7.199 26.131-10.511 41.084Z"
                style={{
                    fill: "#cdd8de",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1100.17 669.58c-44.812.921-88.247.921-136.014.921 4.036-5.669 6.153-11.292 8.339-11.32 41.425-.517 82.859-.486 124.283.047 1.63.021 3.182 6.148 3.392 10.352Z"
                style={{
                    fill: "#d5dee2",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M885.001 911.08c-6.273-9.977-13.543-18.212-16.358-27.761-4.535-15.381 6.629-22.776 19.372-26.364 13.207-3.72 22.375.838 25.116 19.259-4.731-2.973-6.88-5.382-9.236-5.606-7.369-.698-16.481-3.163-21.642.153-3.39 2.179-3.688 14.496-.868 19.941 6.606 12.756 16.854 23.592 23.85 36.192 5.793 10.434 6.675 22.724-7.673 27.205-14.24 4.447-22.609-3.143-26.024-17.453 2.675-.627 4.11-1.474 5.13-1.12 6.843 2.372 13.598 5 20.381 7.546-1.82-7.364-3.326-14.826-5.604-22.045-1.006-3.186-3.579-5.877-6.444-9.947Z"
                style={{
                    fill: "#cdd8de",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M803.49 861.249c11.964-1.279 22.368-1.768 32.772-2.257l.435 6.554-28.412 4.606-4.93 37.04 20.715 1.167.642 3.465-20.281 8.55 2.25 21.021 32.564-4.006 1.237 6.439c-11.348 2.112-22.645 5.09-34.079 5.776-3.173.19-9.795-6.538-9.664-9.89 1.015-25.92 3.3-51.79 6.751-78.465Z"
                style={{
                    fill: "#d5dee2",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1102.25 608.157s.095-.099.084-.173c-.011 5.8-.011 11.674-.011 17.432-22.809-1.903-44.951-5.205-67.09-5.193-22.448.011-44.895 3.295-68.426 5.235 1.332-2.79 2.896-6.07 6.262-10.731 1.8-1.382 3.138-2.246 5.377-2.127 38.48.315 74.723.684 110.962.477 4.29-.025 8.562-3.203 12.842-4.92ZM1025.1 701.018c27.327.825 52.593 1.65 77.86 2.475l-.44 8.091H966.853l-.612-7.445c18.933-1.041 37.867-2.081 58.859-3.121Z"
                style={{
                    fill: "#cad6dd",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1020.85 688.987c-19.079.962-36.078 1.925-54.721 2.981 12.085-17.032 119.688-18.479 136.537-2.98l-81.816-.001ZM982.099 646.096c-6.054.494-10.391.743-16.317 1.084 16.993-19.666 117.82-19.997 137.211-1.329-40.314 0-79.746 0-120.894.245Z"
                style={{
                    fill: "#d5dee2",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M634.692 858.478c8.506-.143 15.249-.143 23.74-.143-20.272 20.854-20.2 76.609 3.571 87.466l-33.172 7.512c3.633-30.466 14.631-59.108-2.266-87.495-.499-.838 4.128-4.728 8.127-7.34Z"
                style={{
                    fill: "#cad6dd",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M331.045 923.461c-1.187 20.525 13.264 10.749 22.697 10.079l-.515 6.598-29.113 11.141v-100.24l6.924-.117c0 23.544 0 47.089.007 72.539Z"
                style={{
                    fill: "#c6d3db",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M1103.4 570.493c-40.01-26.928-82.207-22.953-126.911-7.798 15.626-25.683 43.088-24.25 67.941-22.354 18.993 1.449 37.334 11.433 57.337 17.003 1.578 3.321 1.784 7.259 1.633 13.149Z"
                style={{
                    fill: "#5689a5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M555.6 870.38c-2.026-.243-2.887-1.454-4.727-3.217 12.321-12.52 24.842-11.875 28.263 3.863 5.528 25.422 6.432 51.85 9.288 77.853l-9.187 1.151c-1.1-8.019-2.466-16.013-3.244-24.063-1.516-15.697-1.76-31.603-4.674-47.018-.747-3.954-9.486-6.398-15.719-8.569Z"
                style={{
                    fill: "#c6d3db",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M973.9 562.178c.442 1.368-.359 2.541-2.3 3.695-1.14-.02-1.15-1.239-1.077-1.841.76-1.085 1.447-1.567 3.377-1.854Z"
                style={{
                    fill: "#5689a5",
                    fillRule: "nonzero",
                }}
            />
            <path
                d="M536.434 1174.07c-1.984-31.772 4.949-59.397 18.842-81.771l90.325-4.342c14.897 25.037 10.037 52.781.646 79.94-4.904 14.183-12.34 27.74-20.273 40.565-10.461 16.909-25.849 28.154-46.649 24.315-21.821-4.027-33.738-20.312-40.495-40.363-1.732-5.14-1.462-10.953-2.396-18.344ZM619.84 1067.5c-14.994 1.535-28.367 2.79-43.663 4.225 12.701-20.964 35.286-25.143 49.391-11.393.445.434-2.659 4.509-5.728 7.168ZM943.136 436.358c-24.141-3.202-46.787-8.658-69.751-11.758-44.876-6.057-87.843 1.744-130.264 21.291-1.579-2.06-2.539-5.267-1.484-6.203 55.577-49.295 164.39-44.068 201.499-3.33ZM953.66 440.125c-3.284 1.249-7.279.967-11.702-1.013 3.378-1.305 7.184-.911 11.702 1.013ZM976.459 588.351c23.254-21.78 52.843-19.532 81.805-15.898 14.028 1.76 27.389 8.836 42.538 14.218-1.647 1.9-5.355 4.829-7.827 4.013-38.195-12.617-76.472-10.161-116.516-2.333ZM1100.45 608.153c-2.477 1.721-6.749 4.899-11.039 4.924-36.239.207-72.482-.162-110.631-.468 3.355-3.888 8.158-9.875 13.954-11.078 35.775-7.429 71.301-6.592 107.716 6.622ZM712.799 498.531c-10.688-.858-21.26-3.287-31.834-5.703-41.881-9.57-82.435-3.324-123.66 8.712 42.018-35.603 112.965-36.967 155.494-3.009ZM720.572 502.843c-2.202.927-4.895.469-7.917-1.48 2.256-.962 4.841-.433 7.917 1.48ZM722.864 544.137c-55.817-17.849-109.755-19.276-163.935-1.639-3.149 1.025-7.164-.612-10.975-3.057 58.436-31.916 117.294-32.42 177.845-2.721.656 3.026-.155 5.381-2.935 7.417ZM501.677 872.691c-.081 4.926-1.292 8.614-2.502 12.302l-2.44-.12c0-4.342 0-8.685.666-14.349 1.492-.572 2.32.179 4.276 2.167Z"
                style={{
                    fill: "#2f6f91",
                    fillRule: "nonzero",
                }}
            />
        </chakra.svg>
    )
}
<!-- @format -->

<template>
  <div class="bg-gray-200 w-full">
    <h1 class="bg-gray-200 text-center text-2xl font-bold p-[1rem]">محصولات اخیر</h1>
    <div class="p-[1rem] flex flex flex-wrap gap-[1rem] w-full">
      <Card
        style="width: 20rem"
        class="cursor-pointer hover:shadow-xl hover:shadow-gray-900/10 ease-in-out duration-300"
      >
        <template #header>
          <img
            alt="user header"
            src="ring.jpg"
          />
        </template>
        <template #title> حلقه همراه الماس </template>
        <template #subtitle> Card subtitle </template>
        <template #footer>
          <Button
            icon="pi pi-check"
            label="Save"
          />
          <Button
            icon="pi pi-times"
            label="Cancel"
            severity="secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

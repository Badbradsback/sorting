function bubbleSort(array)
{

    for(let i = 0; i < array.length; i++)
    {
        for(let j = 1; j < array.length - i; j++)
        {
            if(array[j] < array[j - 1])
            {
                swap(j, j - 1, array);
            }
        }
    }

    console.log(array);
    return array;
}

function swap(index1, index2, array)
{
    const temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
}
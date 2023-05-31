def split(str):
    leftZero =0 
    rightOne = 0
    for s in str:
        if s=='1':
            rightOne+=1
    score = 0
    for s in str:
        if s=='0':
            leftZero+=1
        else:
            rightOne-=1
        score = max(score,leftZero+rightOne)
    return score

print(split('011101'))
# stage needs the Go image to build the binary
FROM golang:1.17-alpine AS stage 
WORKDIR /app
COPY go.* *.go ./
COPY build/ ./
RUN ls -la 
RUN GOARCH=amd64 go build -o /cohort-frontend

# Now that we have the binary we don't need GO imagge so we use a clean version of scratch
FROM scratch
COPY --from=stage /cohort-frontend /cohort-frontend
CMD [ "/cohort-frontend" ]